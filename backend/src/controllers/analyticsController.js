import * as analyticsService from "../services/analyticsService.js";
import { successResponse } from "../middleware/responseHandler.js";

export const getAnalytics = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const data = await analyticsService.getAnalytics(
      req.user.id,
      { startDate, endDate }
    );

    return successResponse(res, data, "Analytics fetched successfully");

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};