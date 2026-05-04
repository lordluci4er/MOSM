import express from "express";
import {
  signup,
  login,
  saveFcmToken,
  refreshToken
} from "../controllers/authController.js";

import {
  validateSignup,
  validateLogin
} from "../validators/authValidator.js";

import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Signup
router.post("/signup", validateSignup, signup);

// 🔓 Login
router.post("/login", validateLogin, login);

// 🔄 Refresh Access Token
router.post("/refresh-token", refreshToken);

// 🔔 Save FCM Token (protected)
router.post("/fcm-token", verifyUser, saveFcmToken);

export default router;