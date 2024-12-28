import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [credit, setCredit] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const backendUrl = "http://localhost:4000";
    const navigate = useNavigate();

    const getAuthHeaders = () => ({
        Authorization: `Bearer ${token}`,
    });

    const loadCreditData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
                headers: getAuthHeaders(),
            });
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            } else {
                toast.warning("Failed to load user data.");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error loading credits");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const generateImage = async (prompt) => {
        if (!token) {
            toast.error("You must be logged in to generate an image.");
            return null;
        }

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/image/generate-image`,
                { prompt },
                { headers: getAuthHeaders() }
            );

            if (data.success) {
                loadCreditData();
                return data.resultImage;
            } else {
                toast.error(data.message || "Error generating image");
                loadCreditData();

                if (data.creditBalance === 0) {
                    toast.info("You have run out of credits. Redirecting to purchase page.");
                    navigate("/buy");
                }
            }
        } catch (error) {
            toast.error(error.message || "Unexpected error occurred.");
        }

        return null;
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
        toast.info("You have been logged out.");
        navigate("/login"); // Redirect to login page after logout
    };

    useEffect(() => {
        if (token) {
            loadCreditData();
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        isLoading,
        loadCreditData,
        logout,
        generateImage,
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
