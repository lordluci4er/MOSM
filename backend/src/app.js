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

// 🔧 Middleware
import { errorHandler } from "./middleware/errorMiddleware.js";
import { rateLimiter } from "./middleware/rateLimiter.js";

// 🔐 Security & Logging
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// 🔧 Body Parser
app.use(express.json());

// ⏱️ Request Timeout (early middleware)
app.use((req, res, next) => {
  res.setTimeout(10000, () => {
    res.status(408).json({
      success: false,
      message: "Request timeout"
    });
  });
  next();
});

// 🔐 Security
app.use(cors());
app.use(helmet());

// 📊 Logging
app.use(morgan("dev"));

// 🔥 Rate Limiter
app.use(rateLimiter);

// 🚀 API Routes (VERSIONED)

// 🔐 Auth
app.use("/api/v1/auth", authRoutes);

// 🏢 Core
app.use("/api/v1/party", partyRoutes);
app.use("/api/v1/medicine", medicineRoutes);
app.use("/api/v1/order", orderRoutes);

// 💰 Finance
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/ledger", ledgerRoutes);

// 📊 Analytics & Notifications
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/notifications", notificationRoutes);

// 🧪 Health Check
app.get("/", (req, res) => {
  res.send("MediFlow API Running 🚀");
});

// 🔥 Global Error Handler (ALWAYS LAST)
app.use(errorHandler);

export default app;