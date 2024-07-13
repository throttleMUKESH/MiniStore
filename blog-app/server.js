const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes.js');
const productRoutes = require("./routes/productRoutes.js")
const userRoutes = require("./routes/userRoutes.js")
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require("cors")


dotenv.config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Example: Allow requests only from this origin
  methods: ['GET', 'POST', 'UPDATE', 'PUT', 'DELETE'], // Example: Allow only specified methods
};
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Use blog routes
app.use('/api', blogRoutes);
app.use('/api', productRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
console.log("apikey", process.env.CLOUDINARY_API_KEY )
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
