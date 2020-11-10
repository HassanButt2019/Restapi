const mongoose = require("mongoose");

const moneypoolScheme = new mongoose.Schema({
  currentMoney: {
    type: Number,
    required:true
  },
  contributors: [
    {
      name: {
        type: String,
      },
      contributedMoney: {
        type: Number,
      },
    },
  ],
  earnedMoney: {
    type: Number,
  },
  spendMoney: {
    type: Number
  },
});

module.exports = mongoose.model("moneypool", moneypoolScheme);
