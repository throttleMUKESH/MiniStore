import cloudinary from "cloudinary";
import { getDataUri } from '../utils/feature.js';
import { Blog } from '../model/blogModel.js';

export const createBlogController = async (req, res) => {
  const { title, mainTitle, content } = req.body;

  try {
    // Validation
    if (!title || !mainTitle || !content) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    if (!req.file) {
      return res.status(400).send({
        success: false,
        message: "Please provide product image",
      });
    }

    // Convert file to Data URI
    const fileDataUri = getDataUri(req.file);

    // Upload image to Cloudinary
    const cloudinaryUpload = await cloudinary.v2.uploader.upload(fileDataUri.content);

    // Construct image object
    const img = {
      public_id: cloudinaryUpload.public_id,
      url: cloudinaryUpload.secure_url,
    };

    // Create blog in database
   const blog = await Blog.create({
      title,
      mainTitle,
      content,
      img: [img], // Assuming img is stored as an array of objects
    });

    // Send success response
    res.status(201).send({
      success: true,
      message: "Blog created successfully",
      blog
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return res.status(500).send({
      success: false,
      message: "Error creating blog",
    });
  }
};

export const deleteBlogController = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Validation
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    // Perform deletion
    await blog.remove();

    // Send success response
    return res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);

    // Handle specific errors
    if (error.name === "CastError") {
      return res.status(400).send({
        success: false,
        message: "Invalid Blog ID",
      });
    }

    // General error handling
    return res.status(500).send({
      success: false,
      message: "Error deleting blog",
      error: error.message,
    });
  }
};
