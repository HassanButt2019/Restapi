const mongoose = require("mongoose");

const workerStatusSchema = new mongoose.Schema({
  checkin: Date,
  checkout: Date,
  hoursWorked:{
    type:Number,
  },
  workerId:{
    type:String,
  },
  day: {type: String, enum:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},
  date: Date
},{ collection : 'workerstatus' });

module.exports = mongoose.model("workerstatus", workerStatusSchema);