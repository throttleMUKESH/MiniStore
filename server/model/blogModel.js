import mongoose from "mongoose";
import { User } from "./userModel";

const blogSchema = new mongoose({
     date: {
        type: new Date,
        title: String,
        mainTitle: String,
    
     },
     title: {
        type: String,
        required: [true, "please provide title"]
     },
     mainTitle: {
        type: String,
        required: [true, "please provide mainTitle"]
     },
     img: {
        type: String,
        required: [true, "please provide img"]
     },
     content: {
        type: String,
        required: [true, "please provide content"]
     },
     createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
     }
})

export const Blog = mongoose.model("Blog", blogSchema)