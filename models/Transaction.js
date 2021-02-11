const mongoose = require("mongoose");

//create schema
const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some texts"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"],
  },
  created_at: {
    type: Date,
    default: Date.now, //auto insertion
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
