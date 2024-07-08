import mongoose  from "mongoose";
import { Product } from "./productModel";
import { Blog } from "./blogModel";

const userSchema = new mongoose({
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        unique: [true, "password must be unique"]
    },
    createdProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    createdBlog: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
})

export const User = mongoose.model("User", userSchema)