import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import userRoutes from "./routes/userRoutes.js";
import blogRoute from "./routes/blogRoute.js";
import productRoute from "./routes/productRoute.js";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const app = express();
const PORT = process.env.PORT || 8080;

// Global middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/product", productRoute);

// Test route
app.get("/", (req, res) => {
    res.status(200).send("<h1>It's a test route</h1>");
});

// Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
