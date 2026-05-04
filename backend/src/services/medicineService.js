import MedicineInbox from "../models/MedicineInbox.js";

export const addMedicine = async (user_id, name) => {
  return await MedicineInbox.create({ user_id, name });
};

export const getMedicines = async (user_id) => {
  return await MedicineInbox.find({ user_id });
};

export const deleteMedicine = async (id) => {
  return await MedicineInbox.findByIdAndDelete(id);
};