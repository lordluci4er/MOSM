import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  priority: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("MedicineInbox", medicineSchema);