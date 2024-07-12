const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary').v2;
// const userRoutes = require('./routes/userRoutes.js');
const blogRoute = require("./routes/blogRoute.js")
// const productRoutes = require('./routes/productRoutes.js');
const connectDB = require("./config/db.js")

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

dote

const app = express();
const PORT = process.env.PORT || 8080;

// Global middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
// app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoute);
// app.use("/api/v1/product", productRoute);

// Test route
app.get("/", (req, res) => {
    res.status(200).send("<h1>It's a test route</h1>");
});

// Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
