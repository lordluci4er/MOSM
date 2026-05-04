import express from "express";
import * as ctrl from "../controllers/partyController.js";
import { verifyUser } from "../middleware/authMiddleware.js";
import { validateCreateParty } from "../validators/partyValidator.js";

const router = express.Router();

// Create party (with validation)
router.post("/", verifyUser, validateCreateParty, ctrl.createParty);

// Get all parties
router.get("/", verifyUser, ctrl.getParties);

export default router;