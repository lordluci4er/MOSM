import * as ledgerService from "../services/ledgerService.js";

export const getLedger = async (req, res) => {
  try {
    const data = await ledgerService.getLedger(
      req.user.id,
      req.params.partyId
    );

    res.json(data);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};