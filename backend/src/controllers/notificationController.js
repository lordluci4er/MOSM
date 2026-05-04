import * as notificationService from "../services/notificationService.js";

export const getNotifications = async (req, res) => {
  try {
    const data = await notificationService.getNotifications(req.user.id);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};