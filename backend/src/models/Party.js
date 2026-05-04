import mongoose from "mongoose";

const partySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  phone: String,
  address: String,
  total_due: { type: Number, default: 0 }
}, { timestamps: true });

// ⚡ Index for fast queries (multi-tenant optimization)
partySchema.index({ user_id: 1 });

export default mongoose.model("Party", partySchema);