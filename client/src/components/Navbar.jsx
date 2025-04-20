import { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar() {
    const { user, setShowLogin, logout, credit } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-4 px-4 sm:px-8 border-b border-neutral-200 shadow-sm bg-white z-50'>
            <Link to='/'>
                <img src={assets.logo} alt="Logo" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {user ? (
                    <div className='flex items-center gap-3 sm:gap-5'>
                        <button
                            className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-sm'
                            onClick={() => navigate('/buy')}
                        >
                            <img src={assets.credit_star} alt="Credits" className='w-5' />
                            <p className='text-sm font-medium text-blue-700'>Credits: {credit}</p>
                        </button>

                        <p className='text-gray-700 hidden sm:block'>Hi, <span className='font-semibold'>{user.name}</span></p>

                        <div className='relative group'>
                            <img
                                src={assets.profile_icon}
                                className='w-10 h-10 rounded-full cursor-pointer border border-gray-200 shadow-sm'
                                alt="Profile"
                            />
                            <div className='absolute hidden group-hover:block top-10 right-0 z-20 bg-white rounded-md shadow-lg border mt-2 min-w-[120px]'>
                                <ul className='text-sm text-gray-800'>
                                    <li
                                        onClick={logout}
                                        className='py-2 px-4 hover:bg-gray-100 cursor-pointer rounded-t-md'
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center gap-4 sm:gap-6'>
                        <p
                            className='text-gray-600 font-medium cursor-pointer hover:text-blue-600 transition-colors duration-200'
                            onClick={() => navigate('/buy')}
                        >
                            Pricing
                        </p>
                        <button
                            onClick={() => setShowLogin(true)}
                            className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-pink-600 text-white px-6 sm:px-8 py-2 text-sm rounded-full shadow-md transition-all duration-300'
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
