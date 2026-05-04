import * as medService from "../services/medicineService.js";

export const addMedicine = async (req, res) => {
  const med = await medService.addMedicine(req.user.id, req.body.name);
  res.json(med);
};

export const getMedicines = async (req, res) => {
  const meds = await medService.getMedicines(req.user.id);
  res.json(meds);
};

export const deleteMedicine = async (req, res) => {
  await medService.deleteMedicine(req.params.id);
  res.json({ message: "Deleted" });
};