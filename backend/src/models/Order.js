import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  party_id: { type: mongoose.Schema.Types.ObjectId, ref: "Party" },
  medicine_name: String,
  status: { type: String, default: "ordered" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);