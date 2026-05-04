export const validateRequest = (validator) => {
  return (req, res, next) => {
    try {
      validator(req, res, next);
    } catch (err) {
      res.status(400).json({
        message: err.message || "Validation error"
      });
    }
  };
};