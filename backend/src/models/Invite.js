import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema({
  code: String,
  maxUses: Number,
  usedCount: { type: Number, default: 0 },
  active: Boolean
});

export default mongoose.model("Invite", inviteSchema);