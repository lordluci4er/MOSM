import express from "express";
import * as ctrl from "../controllers/ledgerController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:partyId", verifyUser, ctrl.getLedger);

export default router;