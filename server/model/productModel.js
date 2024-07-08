import mongoose from "mongoose";
import { User } from "./userModel";

const productSchema = new mongoose({
    title: {
        type: String,
        reqduired: [true, "title must be provide"]
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    category: {
        type: String,
        required: [true, "category must be provided"]
    },
    img: {
        type: String,
        required: [true, "img must be provided"]
    },
    createdBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})


export const Product = mongoose.model("Product", productSchema)