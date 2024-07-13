const express = require("express");
const userController = require("../controllers/userController.js");
const productController = require("../controllers/productController.js")
const verifyToken = require("../middleware/verifyToken.js")
const router = express.Router();

router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
router.get("/user-details",verifyToken, userController.userDetails)
router.get("/get-products", productController.getAllProducts)


    module.exports = router;