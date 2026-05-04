import * as paymentService from "../services/paymentService.js";
import { successResponse } from "../middleware/responseHandler.js";

export const makePayment = async (req, res) => {
  try {
    const { party_id, amount, type } = req.body;

    const payment = await paymentService.makePayment(
      req.user.id,
      party_id,
      amount,
      type
    );

    return successResponse(
      res,
      payment,
      "Payment successful"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};