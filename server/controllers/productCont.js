import cloudinary from "cloudinary";
import { getDataUri } from "../utils/feature.js";
import {Product} from "../model/productModel.js"


export const getAllProductsController = async (req, res) => {
    try {
        const products = await Product.find();

        if (!products) {
            return res.status(404).send({
                success: false,
                message: "No products found"
            });
        }

        return res.status(200).send({
            success: true,
            message: "Products fetched successfully",
            products
        });
    } catch (error) {
        console.error("Error fetching products:", error);

        return res.status(500).send({
            success: false,
            message: "Error fetching products"
        });
    }
};

export const createProductController = async (req, res) => {
    const { title, price, category } = req.body;

    try {
        // Validation
        if (!title || !price || !category) {
            return res.status(400).send({
                success: false,
                message: "Please provide all fields"
            });
        }

        if (!req.file) {
            return res.status(400).send({
                success: false,
                message: "Please provide product image"
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

        // Create product in DB
        const product = await Product.create({
            title,
            price,
            category,
            img: [img]
        });

        return res.status(201).send({
            success: true,
            message: "Product created successfully",
            product
        });
    } catch (error) {
        console.log("Error creating product:", error);
        return res.status(500).send({
            success: false,
            message: "Error creating product"
        });
    }
};




// delete single product controller
export const deleteProductController = async (req, res) => {
    const {id} = req.prams;

    try {
        const product = await Product.findById(req.prams.id);

        // validaiton
        if(!product) {
            return res.status(404).send({
                success: false,
                message: "Product not found"
            })
        }
           // perform deletion
           await product.remove();
    }catch (error) {
        console.error("Error deleting blog:", error);
    
        // Handle specific errors
        if (error.name === "CastError") {
          return res.status(400).send({
            success: false,
            message: "Invalid Product ID",
          });
        }
    
        // General error handling
        return res.status(500).send({
          success: false,
          message: "Error deleting blog",
          error: error.message,
        });
      }
} 