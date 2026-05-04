import * as notificationService from "../services/notificationService.js";
import { successResponse } from "../middleware/responseHandler.js";

export const getNotifications = async (req, res) => {
  try {
    const data = await notificationService.getNotifications(req.user.id);

    return successResponse(
      res,
      data,
      "Notifications fetched successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};