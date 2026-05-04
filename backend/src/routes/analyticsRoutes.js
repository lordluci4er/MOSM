import express from "express";
import * as ctrl from "../controllers/analyticsController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyUser, ctrl.getAnalytics);

export default router;