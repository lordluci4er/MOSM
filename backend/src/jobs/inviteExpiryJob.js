import Invite from "../models/Invite.js";

export const expireInvites = async () => {
  await Invite.updateMany(
    { usedCount: { $gte: 5 } },
    { active: false }
  );
};