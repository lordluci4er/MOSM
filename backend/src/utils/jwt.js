import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

// 🔐 Access Token (short-lived)
export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// 🔄 Refresh Token (long-lived)
export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id },
    JWT_SECRET,
    { expiresIn: "30d" }
  );
};