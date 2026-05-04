import * as paymentService from "../services/paymentService.js";

export const makePayment = async (req, res) => {
  try {
    const { party_id, amount, type } = req.body;

    const payment = await paymentService.makePayment(
      req.user.id,
      party_id,
      amount,
      type
    );

    res.json(payment);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};