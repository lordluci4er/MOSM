import * as ledgerService from "../services/ledgerService.js";
import { successResponse } from "../middleware/responseHandler.js";

export const getLedger = async (req, res) => {
  try {
    const data = await ledgerService.getLedger(
      req.user.id,
      req.params.partyId
    );

    return successResponse(
      res,
      data,
      "Ledger fetched successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};