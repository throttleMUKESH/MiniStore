import mongoose from "mongoose";
import { Product } from "./productModel.js";
import { Blog } from "./blogModel.js";

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true // Ensures uniqueness of email
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    createdProducts: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    createdBlogs: [{
        type: Schema.Types.ObjectId,
        ref: "Blog"
    }]
});

export const User = mongoose.model("User", userSchema);
