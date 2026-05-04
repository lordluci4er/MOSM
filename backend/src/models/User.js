import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: String, default: "free" },

  // 🔔 Firebase Cloud Messaging token
  fcm_token: {
    type: String,
    default: null
  },

  // 🔄 Refresh Token (for long session login)
  refresh_token: {
    type: String,
    default: null
  }

}, { timestamps: true });

export default mongoose.model("User", userSchema);