// controllers/productController.js
const Product = require("../models/product.js")

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { title, price, category } = req.body;
    const img = req.file.path;
    const userId = req._id; 

    const newProduct = new Product({ title, price, category, img, createdBy: userId });
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    const userId = req._id
  try {
    const products = await Product.find(userId).populate();
    res.status(200).json(products);
    
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { title, price, category } = req.body;
    let img = req.file ? req.file.path : req.body.img;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { title, price, category, img },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};
