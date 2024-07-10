import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const jwtToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      }
    );

    // Set cookie with JWT token
    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    // Send success response
    return res.status(201).send({
      success: true,
      message: "User created successfully",
      email: user.email,
      createdProducts: user.createdProducts,
      createdBlogs: user.createdBlogs,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).send({
      success: false,
      message: "Error signing up!",
      error: error.message,
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Check user
    const user = await User.findOne({ email });

    // User validation
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate JWT token
    const jwtToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      }
    );

    // Set cookie with JWT token
    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      email: user.email,
      createdProducts: user.createdProducts,
      createdBlogs: user.createdBlogs,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    // Clear JWT token cookie
    res.clearCookie("token");

    // Send success response
    return res.status(200).send({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error logging out",
      error: error.message,
    });
  }
};

export const userDetailsController = async (req, res) => {
  const userId = req._id;
  try {
    // Find user by ID
    const user = await User.findById(userId);

    // Validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Send user details
    return res.status(200).send({
      success: true,
      message: "Successfully fetched user details",
      email: user.email,
      createdProducts: user.createdProducts,
      createdBlogs: user.createdBlogs,
    });
  } catch (error) {
    console.error("User details error:", error);
    return res.status(500).send({
      success: false,
      message: "Unable to fetch user details",
      error: error.message,
    });
  }
};
