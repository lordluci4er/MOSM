import Payment from "../models/Payment.js";
import Party from "../models/Party.js";

export const makePayment = async (user_id, party_id, amount, type) => {

  const payment = await Payment.create({
    user_id,
    party_id,
    amount,
    type
  });

  const party = await Party.findById(party_id);

  party.total_due -= amount;
  if (party.total_due < 0) party.total_due = 0;

  await party.save();

  return payment;
};