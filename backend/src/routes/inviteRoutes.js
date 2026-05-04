import express from "express";
import * as ctrl from "../controllers/inviteController.js";

const router = express.Router();

router.post("/toggle", ctrl.toggleInvite);
router.post("/create", ctrl.createInvite);

export default router;