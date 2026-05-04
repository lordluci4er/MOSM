import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import { PORT } from "./src/config/env.js";
import { logger } from "./src/utils/logger.js";

// 🔌 Connect Database
connectDB();

// 🚀 Start Server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});