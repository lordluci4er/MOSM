import express from "express";
import * as ctrl from "../controllers/orderController.js";
import { verifyUser } from "../middleware/authMiddleware.js";
import {
  validateCreateOrder,
  validateOrderStatus
} from "../validators/orderValidator.js";

const router = express.Router();

// Create order (with validation)
router.post("/", verifyUser, validateCreateOrder, ctrl.createOrder);

// Get orders by party
router.get("/:partyId", verifyUser, ctrl.getOrders);

// Update order status (with validation)
router.put("/:id", verifyUser, validateOrderStatus, ctrl.updateStatus);

export default router;