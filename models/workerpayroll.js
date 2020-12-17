const mongoose = require("mongoose");

const workerPayrollSchema = new mongoose.Schema({
  totalPresent: Number,
  totalAbsent:Number,
  name:String,
  basicSalary:Number,
  workerId: {
    type:String,
    required:true
  },
  bonus:Number,
  deductionsPerAbsent:Number,
  totalDeductions:Number,
  totalIncome:Number
},{ collection : 'workerpayroll' });

module.exports = mongoose.model("workerPayroll", workerPayrollSchema);
