import express from "express";

// 🔐 Auth Routes
import authRoutes from "./routes/authRoutes.js";

// 🏢 Core Routes
import partyRoutes from "./routes/partyRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// 💰 Finance Routes
import paymentRoutes from "./routes/paymentRoutes.js";
import ledgerRoutes from "./routes/ledgerRoutes.js";

const app = express();

// 🔧 Global Middleware
app.use(express.json());

// 🚀 API Routes
app.use("/api/auth", authRoutes);
app.use("/api/party", partyRoutes);
app.use("/api/medicine", medicineRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/ledger", ledgerRoutes);

// 🧪 Health Check (optional but useful)
app.get("/", (req, res) => {
  res.send("MediFlow API Running 🚀");
});

export default app;