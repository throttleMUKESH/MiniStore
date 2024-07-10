import express from "express";
import {singleUpload} from "../middleware/multer.js";
import { createProductController, deleteProductController, getAllProductsController } from "../controllers/productCont.js";
const router = express.Router();


router.get("all", getAllProductsController )
router.get("/create", singleUpload, createProductController )
router.get("/delete/:id", deleteProductController )


export default router;