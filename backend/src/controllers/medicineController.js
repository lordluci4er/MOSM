import * as medService from "../services/medicineService.js";
import { successResponse } from "../middleware/responseHandler.js";

export const addMedicine = async (req, res) => {
  try {
    const med = await medService.addMedicine(
      req.user.id,
      req.body.name
    );

    return successResponse(
      res,
      med,
      "Medicine added successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

export const getMedicines = async (req, res) => {
  try {
    const meds = await medService.getMedicines(req.user.id);

    return successResponse(
      res,
      meds,
      "Medicines fetched successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

export const deleteMedicine = async (req, res) => {
  try {
    await medService.deleteMedicine(req.params.id);

    return successResponse(
      res,
      null,
      "Medicine deleted successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};