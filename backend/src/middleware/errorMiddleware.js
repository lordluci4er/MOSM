import { logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  // 🧾 Log error properly
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method
  });

  // 🔥 Response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error"
  });
};