import express from "express";
import * as ctrl from "../controllers/partyController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyUser, ctrl.createParty);
router.get("/", verifyUser, ctrl.getParties);

export default router;