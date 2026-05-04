import * as orderService from "../services/orderService.js";

export const createOrder = async (req, res) => {
  const { party_id, medicine_id } = req.body;
  const order = await orderService.createOrder(
    req.user.id,
    party_id,
    medicine_id
  );
  res.json(order);
};

export const getOrders = async (req, res) => {
  const data = await orderService.getOrdersByParty(req.params.partyId);
  res.json(data);
};

export const updateStatus = async (req, res) => {
  const { status } = req.body;
  const order = await orderService.updateOrderStatus(
    req.params.id,
    status
  );
  res.json(order);
};