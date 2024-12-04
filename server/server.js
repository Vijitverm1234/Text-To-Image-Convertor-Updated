import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    await connectDB();  // Connect to MongoDB
    app.use('/api/user', userRouter);  // User routes
    app.use('/api/image', imageRouter);  // Image generation routes

    // Health check route
    app.get('/', (req, res) => {
      res.send('API is working 🥹');
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

startServer();  // Run the server
