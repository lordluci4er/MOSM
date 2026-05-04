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

// 📊 Advanced Features
import analyticsRoutes from "./routes/analyticsRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();

// 🔧 Global Middleware
app.use(express.json());

// 🚀 API Routes

// 🔐 Auth
app.use("/api/auth", authRoutes);

// 🏢 Core
app.use("/api/party", partyRoutes);
app.use("/api/medicine", medicineRoutes);
app.use("/api/order", orderRoutes);

// 💰 Finance
app.use("/api/payment", paymentRoutes);
app.use("/api/ledger", ledgerRoutes);

// 📊 Analytics & Notifications
app.use("/api/analytics", analyticsRoutes);
app.use("/api/notifications", notificationRoutes);

// 🧪 Health Check
app.get("/", (req, res) => {
  res.send("MediFlow API Running 🚀");
});

export default app;