import Order from "../models/Order.js";

export const getAnalytics = async (user_id, { startDate, endDate }) => {

  const filter = {
    user_id,
    createdAt: {
      $gte: new Date(startDate),
      $lte: new Date(endDate)
    }
  };

  const orders = await Order.find(filter);

  const medicineMap = {};
  const partyMap = {};

  orders.forEach(order => {
    medicineMap[order.medicine_name] =
      (medicineMap[order.medicine_name] || 0) + 1;

    partyMap[order.party_id] =
      (partyMap[order.party_id] || 0) + 1;
  });

  const topMedicines = Object.entries(medicineMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const topParties = Object.entries(partyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return {
    totalOrders: orders.length,
    topMedicines,
    topParties
  };
};