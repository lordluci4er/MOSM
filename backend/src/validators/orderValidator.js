export const validateCreateOrder = (req, res, next) => {
  const { party_id, medicine_id } = req.body;

  if (!party_id || !medicine_id) {
    return res.status(400).json({
      message: "Party ID and Medicine ID required"
    });
  }

  next();
};

export const validateOrderStatus = (req, res, next) => {
  const { status } = req.body;

  const validStatus = ["ordered", "received", "returned"];

  if (!validStatus.includes(status)) {
    return res.status(400).json({
      message: "Invalid order status"
    });
  }

  next();
};