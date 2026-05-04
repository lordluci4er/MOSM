import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import { PORT } from "./src/config/env.js";

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});