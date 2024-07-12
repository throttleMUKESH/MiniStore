// // controllers/productController.js
// const Product = require("../model/productModel.js")
// const cloudinary = required("../config/cloudinaryConfig.js")


// // Create a new product
// exports.createProduct = async (req, res) => {
//   try {
//     const { title, price, category } = req.body;
//     const img = req.file.path;

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(img);

//     // Construct image URL from Cloudinary response
//     const imgURL = result.secure_url;

//     const newProduct = new Product({ title, price, category, img: imgURL });
//     await newProduct.save();

//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating product', error });
//   }
// };

// // Get all products
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching products', error });
//   }
// };

// // Get a single product by ID
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching product', error });
//   }
// };

// // Update a product by ID
// exports.updateProductById = async (req, res) => {
//   try {
//     const { title, price, category } = req.body;
//     let img = req.body.img;

//     if (req.file) {
//       // Upload new image to Cloudinary
//       const result = await cloudinary.uploader.upload(req.file.path);
//       img = result.secure_url;
//     }

//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       { title, price, category, img },
//       { new: true }
//     );

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating product', error });
//   }
// };

// // Delete a product by ID
// exports.deleteProductById = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product deleted' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting product', error });
//   }
// };
