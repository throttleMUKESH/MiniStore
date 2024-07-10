import express from "express";
import { loginController, logoutController, registerController, userDetailsController } from "../controllers/userCont.js";


const router = express.Router();

router.post("/register", registerController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.get("/user-details", userDetailsController)

export default router;