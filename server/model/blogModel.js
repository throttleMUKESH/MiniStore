import mongoose from 'mongoose';
import { User } from './userModel.js';

const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"]
    },
    mainTitle: {
        type: String,
        required: [true, "Please provide a main title"]
    },
    img: [{
        public_id: String,
        url: String,
    }],
    content: {
        type: String,
        required: [true, "Please provide content"]
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

blogSchema.path('img').schema.eachPath((path, schemaType) => {
    if (path === 'public_id' || path === 'url') {
        schemaType.required(true, `Please provide an image ${path}`);
    }
});

export const Blog = mongoose.model("Blog", blogSchema);
