import Order from "../models/Order.js";
import Payment from "../models/Payment.js";

export const getLedger = async (user_id, party_id) => {

  const orders = await Order.find({ user_id, party_id, status: "received" });
  const payments = await Payment.find({ user_id, party_id });

  let totalOrder = orders.length * 1; // simple count logic (can upgrade)
  let totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);

  return {
    totalOrder,
    totalPaid,
    due: totalOrder - totalPaid,
    orders,
    payments
  };
};