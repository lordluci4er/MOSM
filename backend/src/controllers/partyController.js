import * as partyService from "../services/partyService.js";
import { successResponse } from "../middleware/responseHandler.js";

export const createParty = async (req, res) => {
  try {
    const party = await partyService.createParty(
      req.user.id,
      req.body
    );

    return successResponse(
      res,
      party,
      "Party created successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

export const getParties = async (req, res) => {
  try {
    const data = await partyService.getParties(req.user.id);

    return successResponse(
      res,
      data,
      "Parties fetched successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};