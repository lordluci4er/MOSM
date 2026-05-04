import * as partyService from "../services/partyService.js";

export const createParty = async (req, res) => {
  const party = await partyService.createParty(req.user.id, req.body);
  res.json(party);
};

export const getParties = async (req, res) => {
  const data = await partyService.getParties(req.user.id);
  res.json(data);
};