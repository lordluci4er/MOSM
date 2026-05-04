import Config from "../models/Config.js";
import Invite from "../models/Invite.js";
import { generateInviteCode } from "../utils/generateInvite.js";
import { successResponse } from "../middleware/responseHandler.js";

export const toggleInvite = async (req, res) => {
  try {
    const { enabled } = req.body;

    await Config.updateOne(
      { key: "inviteOnly" },
      { value: enabled },
      { upsert: true }
    );

    return successResponse(
      res,
      { inviteOnly: enabled },
      "Invite system updated"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

export const createInvite = async (req, res) => {
  try {
    const code = generateInviteCode();

    const invite = await Invite.create({
      code,
      maxUses: 5,
      active: true
    });

    return successResponse(
      res,
      invite,
      "Invite created successfully"
    );

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};