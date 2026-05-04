export const validatePayment = (req, res, next) => {
  const { party_id, amount } = req.body;

  if (!party_id || !amount) {
    return res.status(400).json({
      message: "Party ID and amount required"
    });
  }

  if (typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({
      message: "Invalid payment amount"
    });
  }

  next();
};