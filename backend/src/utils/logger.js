import winston from "winston";
import path from "path";

// 📁 Log directory
const logDir = "src/logs";

// 🎯 Custom format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${
      stack || message
    }`;
  })
);

// 🚀 Create logger
export const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: [
    // 📄 Error logs
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error"
    }),

    // 📄 Combined logs
    new winston.transports.File({
      filename: path.join(logDir, "combined.log")
    })
  ]
});

// 🖥️ Console logging (dev mode)
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}