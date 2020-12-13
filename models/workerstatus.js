const mongoose = require("mongoose");

const workerStatusSchema = new mongoose.Schema({
  checkin: {
    type:String
  },
  checkout:{
    type:String
  },
  hoursWorked:{
    type:String,
  },
  workerId:{
    type:String,
  },
  day: {type: String, enum:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},
  date: {
    type:String
  }
},{ collection : 'workerstatus' });

module.exports = mongoose.model("workerstatus", workerStatusSchema);