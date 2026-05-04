import express from "express";
import * as ctrl from "../controllers/orderController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyUser, ctrl.createOrder);
router.get("/:partyId", verifyUser, ctrl.getOrders);
router.put("/:id", verifyUser, ctrl.updateStatus);

export default router;