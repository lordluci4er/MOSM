import express from "express";
import * as ctrl from "../controllers/medicineController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyUser, ctrl.addMedicine);
router.get("/", verifyUser, ctrl.getMedicines);
router.delete("/:id", verifyUser, ctrl.deleteMedicine);

export default router;