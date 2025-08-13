const Tin = require('../models/Tin');

exports.createTin = async (req, res) => {
  const tin = await Tin.create(req.body);
  res.status(201).json(tin);
};

exports.getAllTins = async (req, res) => {
  const tins = await Tin.find();
  res.json(tins);
};

exports.updateTin = async (req, res) => {
  const { id } = req.params;
  const updated = await Tin.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deactivateTin = async (req, res) => {
  const { id } = req.params;
  await Tin.findByIdAndUpdate(id, { isActive: false });
  res.json({ message: 'TIN deactivated' });
};

// NEW function
exports.activateTin = async (req, res) => {
  const { id } = req.params;
  await Tin.findByIdAndUpdate(id, { isActive: true });
  res.json({ message: 'TIN activated' });
};

exports.deleteTin = async (req, res) => {
  const { id } = req.params;
  await Tin.findByIdAndDelete(id);
  res.json({ message: 'TIN permanently deleted' });
};
