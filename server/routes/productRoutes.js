// // routes/productRoutes.js
// import express from "express";
// import multer from "multer";
// import {storage} from "../config/cloudinaryConfig.js"
// import productController from  '../controllers/productController.js';

// const router = express.Router();
// const upload = multer({ storage });

// router.post('/products', upload.single('img'), productController.createProduct);
// router.get('/products', productController.getAllProducts);
// router.get('/products/:id', productController.getProductById);
// router.put('/products/:id', upload.single('img'), productController.updateProductById);
// router.delete('/products/:id', productController.deleteProductById);

// module.exports = router;
