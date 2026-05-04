import mongoose from "mongoose";

const configSchema = new mongoose.Schema({
  key: String,
  value: mongoose.Schema.Types.Mixed
});

export default mongoose.model("Config", configSchema);