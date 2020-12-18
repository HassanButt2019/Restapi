const mongoose = require("mongoose");
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

const moneypoolScheme = new mongoose.Schema({
  currentMoney: {
    type: SchemaTypes.Double,
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
