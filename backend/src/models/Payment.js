import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  party_id: { type: mongoose.Schema.Types.ObjectId, ref: "Party" },

  amount: { type: Number, required: true },
  type: { type: String, enum: ["full", "partial"], default: "partial" },

  note: String
}, { timestamps: true });

// ⚡ Fast ledger queries (user + party)
paymentSchema.index({ user_id: 1, party_id: 1 });

// ⚡ Fast recent payments (dashboard / history)
paymentSchema.index({ user_id: 1, createdAt: -1 });

export default mongoose.model("Payment", paymentSchema);