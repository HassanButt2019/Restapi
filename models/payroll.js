const mongoose = require("mongoose");

const workerPayrollSchema = new mongoose.Schema({
  totalPresent: number,
  totalAbsent: number,
  name: String,
  basicSalary: number,
  workerId: number,
  Bonus: number,
  deductionsPerAbsent: number,
  totalIncome:number
});

module.exports = mongoose.model("workerPayroll", workerPayrollSchema);
