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
    type: SchemaTypes.Double,
  },
  spendMoney: {
    type: SchemaTypes.Double,
  },
});

module.exports = mongoose.model("moneypool", moneypoolScheme);
