const mongoose = require('mongoose');

const tinSchema = new mongoose.Schema({
  name: String,
  address: String,
  birthdate: Date,
  tinNumber: String,
  date: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Tin', tinSchema);
