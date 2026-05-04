const fs = require("fs");
const path = require("path");

const structure = {
  "backend": {
    "src": {
      "config": ["database.js", "env.js"],
      "constants": ["roles.js", "orderStatus.js", "paymentStatus.js"],
      "models": [
        "User.js",
        "Party.js",
        "Order.js",
        "Payment.js",
        "MedicineInbox.js",
        "Config.js",
        "Invite.js",
      ],
      "validators": [
        "authValidator.js",
        "partyValidator.js",
        "orderValidator.js",
        "paymentValidator.js",
      ],
      "controllers": [
        "authController.js",
        "partyController.js",
        "orderController.js",
        "paymentController.js",
        "medicineController.js",
        "inviteController.js",
      ],
      "services": [
        "authService.js",
        "partyService.js",
        "orderService.js",
        "paymentService.js",
        "medicineService.js",
        "inviteService.js",
        "ledgerService.js",
        "analyticsService.js",
        "notificationService.js",
      ],
      "routes": [
        "authRoutes.js",
        "partyRoutes.js",
        "orderRoutes.js",
        "paymentRoutes.js",
        "medicineRoutes.js",
        "inviteRoutes.js",
      ],
      "middleware": [
        "authMiddleware.js",
        "errorMiddleware.js",
        "rateLimiter.js",
        "validateRequest.js",
      ],
      "jobs": ["inviteExpiryJob.js", "analyticsJob.js"],
      "utils": ["jwt.js", "password.js", "generateInvite.js", "logger.js"],
      "logs": [],
      "app.js": null,
    },
    "server.js": null,
    "tests": {},
    ".env": null,
    ".gitignore": null,
    "package.json": null,
    "README.md": null,
  },
};

function createStructure(basePath, obj) {
  for (const key in obj) {
    const fullPath = path.join(basePath, key);

    if (Array.isArray(obj[key])) {
      fs.mkdirSync(fullPath, { recursive: true });
      obj[key].forEach((file) => {
        const filePath = path.join(fullPath, file);
        fs.writeFileSync(filePath, `// ${file}`);
      });
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      fs.mkdirSync(fullPath, { recursive: true });
      createStructure(fullPath, obj[key]);
    } else {
      // file
      fs.writeFileSync(fullPath, `// ${key}`);
    }
  }
}

// Run
createStructure(process.cwd(), structure);

console.log("🔥 Backend structure created successfully!");