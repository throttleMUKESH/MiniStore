import mongoose from "mongoose";
import { User } from "./userModel.js";

const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title must be provided"]
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"]
    },
    category: {
        type: String,
        required: [true, "Category must be provided"]
    },
    img: {
        type: String,
        required: [true, "Image must be provided"]
    },
    createdBy: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

export const Product = mongoose.model("Product", productSchema);
