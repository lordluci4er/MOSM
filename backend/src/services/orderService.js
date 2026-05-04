import Order from "../models/Order.js";
import MedicineInbox from "../models/MedicineInbox.js";
import Party from "../models/Party.js";

// 📦 Create Order (Inbox → Order)
export const createOrder = async (user_id, party_id, medicine_id) => {

  const med = await MedicineInbox.findById(medicine_id);

  if (!med) {
    throw new Error("Medicine not found in inbox");
  }

  const order = await Order.create({
    user_id,
    party_id,
    medicine_name: med.name,
    status: "ordered"
  });

  // Inbox se remove
  await MedicineInbox.findByIdAndDelete(medicine_id);

  return order;
};


// 📋 Get Orders by Party (Latest first 🔥)
export const getOrdersByParty = async (party_id) => {
  return await Order.find({ party_id })
    .sort({ createdAt: -1 }); // latest order top pe
};


// 🔄 Update Order Status
export const updateOrderStatus = async (order_id, status) => {

  const order = await Order.findById(order_id);

  if (!order) {
    throw new Error("Order not found");
  }

  // ❌ Return to Inbox
  if (status === "returned") {

    await MedicineInbox.create({
      user_id: order.user_id,
      name: order.medicine_name
    });

    await Order.findByIdAndDelete(order_id);

    return { message: "Returned to inbox" };
  }

  // ⚠️ Same status repeat na ho
  if (order.status === status) {
    return order;
  }

  order.status = status;
  await order.save();

  // ✅ Received → Party due increase
  if (status === "received") {

    const party = await Party.findById(order.party_id);

    if (party) {
      party.total_due += 1; // future: price based
      await party.save();
    }
  }

  return order;
};