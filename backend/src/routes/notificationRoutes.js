import express from "express";
import * as ctrl from "../controllers/notificationController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyUser, ctrl.getNotifications);

export default router;