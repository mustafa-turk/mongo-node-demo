const mongoose = require("mongoose");

module.exports = mongoose.model('Document', new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}));