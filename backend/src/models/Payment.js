import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  party_id: { type: mongoose.Schema.Types.ObjectId, ref: "Party" },

  amount: { type: Number, required: true },
  type: { type: String, enum: ["full", "partial"], default: "partial" },

  note: String
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);