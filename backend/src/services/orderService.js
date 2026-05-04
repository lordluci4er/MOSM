import Order from "../models/Order.js";
import MedicineInbox from "../models/MedicineInbox.js";

export const createOrder = async (user_id, party_id, medicine_id) => {

  const med = await MedicineInbox.findById(medicine_id);

  const order = await Order.create({
    user_id,
    party_id,
    medicine_name: med.name,
    status: "ordered"
  });

  await MedicineInbox.findByIdAndDelete(medicine_id);

  return order;
};

export const getOrdersByParty = async (party_id) => {
  return await Order.find({ party_id });
};

export const updateOrderStatus = async (order_id, status) => {
  const order = await Order.findById(order_id);

  if (status === "returned") {
    await MedicineInbox.create({
      user_id: order.user_id,
      name: order.medicine_name
    });
    await Order.findByIdAndDelete(order_id);
    return;
  }

  order.status = status;
  await order.save();

  return order;
};