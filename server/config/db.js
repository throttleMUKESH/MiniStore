const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/MinistoreInstitute', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB error: ${error}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

