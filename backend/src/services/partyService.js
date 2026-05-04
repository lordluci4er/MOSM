import Party from "../models/Party.js";

export const createParty = async (user_id, data) => {
  return await Party.create({ user_id, ...data });
};

export const getParties = async (user_id) => {
  return await Party.find({ user_id });
};