import User from "../models/User.js";
import Config from "../models/Config.js";
import Invite from "../models/Invite.js";
import { hashPassword, comparePassword } from "../utils/password.js";

export const signupUser = async ({ email, password, inviteCode }) => {

  const config = await Config.findOne({ key: "inviteOnly" });

  if (config?.value === true) {
    if (!inviteCode) throw new Error("Invite code required");

    const invite = await Invite.findOne({ code: inviteCode, active: true });

    if (!invite || invite.usedCount >= invite.maxUses) {
      throw new Error("Invalid invite code");
    }

    invite.usedCount += 1;
    await invite.save();
  }

  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const hashed = await hashPassword(password);

  const user = await User.create({ email, password: hashed });

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const match = await comparePassword(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  return user;
};