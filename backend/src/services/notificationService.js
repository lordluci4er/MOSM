import Order from "../models/Order.js";
import Party from "../models/Party.js";

export const getNotifications = async (user_id) => {

  const pendingOrders = await Order.find({
    user_id,
    status: "ordered"
  });

  const parties = await Party.find({ user_id });

  const dueParties = parties.filter(p => p.total_due > 0);

  return {
    pendingOrders: pendingOrders.length,
    duePayments: dueParties.length
  };
};