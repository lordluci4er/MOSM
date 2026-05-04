import { signupUser, loginUser } from "../services/authService.js";
import { generateToken } from "../utils/jwt.js";
import { successResponse } from "../middleware/responseHandler.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

// 🔐 SIGNUP
export const signup = async (req, res) => {
  try {
    const user = await signupUser(req.body);
    const token = generateToken(user);

    return successResponse(
      res,
      { user, token },
      "Signup successful"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// 🔓 LOGIN
export const login = async (req, res) => {
  try {
    const { user, refreshToken } = await loginUser(req.body);

    const token = generateToken(user);

    return successResponse(
      res,
      { user, token, refreshToken },
      "Login successful"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// 🔄 REFRESH TOKEN API
export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token required"
      });
    }

    // verify token
    const decoded = jwt.verify(refreshToken, JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user || user.refresh_token !== refreshToken) {
      return res.status(403).json({
        success: false,
        message: "Invalid refresh token"
      });
    }

    // generate new access token
    const newAccessToken = generateToken(user);

    return successResponse(
      res,
      { token: newAccessToken },
      "New access token generated"
    );

  } catch (err) {
    return res.status(403).json({
      success: false,
      message: "Invalid or expired refresh token"
    });
  }
};

// 🔔 Save FCM Token
export const saveFcmToken = async (req, res) => {
  try {
    const { token } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    user.fcm_token = token;
    await user.save();

    return successResponse(
      res,
      null,
      "FCM token saved successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};