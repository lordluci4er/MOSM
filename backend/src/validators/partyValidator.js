export const validateCreateParty = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      message: "Party name is required"
    });
  }

  if (name.length < 2) {
    return res.status(400).json({
      message: "Party name too short"
    });
  }

  next();
};