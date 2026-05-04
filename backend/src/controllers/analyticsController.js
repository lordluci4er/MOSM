import * as analyticsService from "../services/analyticsService.js";

export const getAnalytics = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const data = await analyticsService.getAnalytics(
      req.user.id,
      { startDate, endDate }
    );

    res.json(data);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};