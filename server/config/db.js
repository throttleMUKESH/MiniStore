import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.PRODUCTION === "true" ? process.env.MONGODB_URI : "mongodb://localhost:27017/scholar"}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;