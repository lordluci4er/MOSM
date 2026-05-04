import Config from "../models/Config.js";
import Invite from "../models/Invite.js";
import { generateInviteCode } from "../utils/generateInvite.js";

export const toggleInvite = async (req, res) => {
  const { enabled } = req.body;

  await Config.updateOne(
    { key: "inviteOnly" },
    { value: enabled },
    { upsert: true }
  );

  res.json({ message: "Invite system updated" });
};

export const createInvite = async (req, res) => {
  const code = generateInviteCode();

  const invite = await Invite.create({
    code,
    maxUses: 5,
    active: true
  });

  res.json(invite);
};