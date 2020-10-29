const mongoose = require('mongoose');

const moneypoolScheme = new mongoose.Schema({
currentMoney: {
type:String,
},
contributors:[{
name:{
type:String,
},
contributedMoney:{
type:String,
},
},],
earnedMoney: {
type:String,
},
spendMoney: {
type:String,
},
loanMoney: {
type:String,
},

});

module.exports = mongoose.model('moneypool',moneypoolScheme);