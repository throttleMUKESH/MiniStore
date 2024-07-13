const express = require("express");
const multer = require("multer");
const {storage} = require("../config/cloudinaryConfig.js");
const productController = require("../controllers/productController.js")

const router = express.Router();

const upload = multer({storage});

router.post("/product", upload.single("img"), productController.createProduct)
router.get("/products", productController.getAllProducts)
router.get("/product/:id", upload.single("img"), productController.getProductById)
router.put("/product/:id", upload.single("img"), productController.updateProduct)
router.delete("/product/:id", upload.single("img"), productController.deleteProduct)


module.exports = router;