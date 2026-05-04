import * as orderService from "../services/orderService.js";
import { successResponse } from "../middleware/responseHandler.js";

export const createOrder = async (req, res) => {
  try {
    const { party_id, medicine_id } = req.body;

    const order = await orderService.createOrder(
      req.user.id,
      party_id,
      medicine_id
    );

    return successResponse(
      res,
      order,
      "Order created successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrdersByParty(
      req.params.partyId
    );

    return successResponse(
      res,
      data,
      "Orders fetched successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await orderService.updateOrderStatus(
      req.params.id,
      status
    );

    return successResponse(
      res,
      order,
      "Order status updated successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};