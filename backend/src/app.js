import express from "express";

// 🔐 Auth Routes
import authRoutes from "./routes/authRoutes.js";

// 🏢 Core Routes
import partyRoutes from "./routes/partyRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/party", partyRoutes);
app.use("/api/medicine", medicineRoutes);
app.use("/api/order", orderRoutes);

export default app;