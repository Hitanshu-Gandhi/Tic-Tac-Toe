import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import gameRoutes from './routes/gameRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
dotenv.config();

mongoose.set('strictQuery', true);

// CORS Configuration
app.use(cors({
    origin: "http://localhost:3000", // Add allowed domains
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/user', userRoutes);

// Check for MONGO_URI
if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not defined in the environment variables.');
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(process.env.PORT || 5000, () =>
            console.log(`Server is live at port ${process.env.PORT || 5000}`)
        );
    })
    .catch((err) => {
        console.error('Database connection failed:', err.message);
        process.exit(1); // Exit the app if database connection fails
    });

export default app;
