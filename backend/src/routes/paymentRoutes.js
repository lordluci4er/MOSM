import express from "express";
import * as ctrl from "../controllers/paymentController.js";
import { verifyUser } from "../middleware/authMiddleware.js";
import { validatePayment } from "../validators/paymentValidator.js";

const router = express.Router();

// Make payment (with validation)
router.post("/", verifyUser, validatePayment, ctrl.makePayment);

export default router;