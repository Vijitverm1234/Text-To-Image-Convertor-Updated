import userModel from "../models/userModel.js";
import FormData from 'form-data';
import axios from "axios";

export const generateImage = async (req, res) => {
    try {
      const { prompt } = req.body;
      
      console.log("Received request with:", { prompt });
      const userId=req.user.id;
    
  
      const user = await userModel.findById(userId);
      if (!user || !prompt) {
        console.error("User or prompt missing");
        return res.status(400).json({ success: false, message: "Missing user or prompt" });
      }
  
      if (user.creditBalance <= 0) {
        console.error("Credits exhausted for user:", userId);
        return res.status(400).json({ success: false, message: "Credits are exhausted" });
      }
  
      console.log("Current credits before deduction:", user.creditBalance);
  
      const formData = new FormData();
      formData.append('prompt', prompt);
  
      const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
        headers: { 'x-api-key': process.env.CLIPDROP_API },
        responseType: 'arraybuffer',
      });
  
      const base64Image = Buffer.from(data, 'binary').toString('base64');
      const resultImage = `data:image/png;base64,${base64Image}`;
  
      user.creditBalance -= 1;
      await user.save();
  
      console.log("Credits after deduction:", user.creditBalance);
  
      res.json({
        success: true,
        message: "Image generated successfully",
        creditBalance: user.creditBalance,
        resultImage,
      });
  
    } catch (error) {
      console.error("Error generating image:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  