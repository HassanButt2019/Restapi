const Payroll = require('../models/workerpayroll');


//@desc get all info using workerid
//@route post /api/v1/workerpayroll
exports.getworkerPayroll = async(req , resp , next)=>{
 
    const {workerId} = req.body;
    console.log(workerId);
    console.log("hello");
    var payroll= await Payroll.find({"workerId":workerId});
 console.log(payroll);
   if(!payroll){
       return resp
     .status(401)
     .json({ success: false, data: payroll});
   }
 
 
 resp
   .status(200)
   .json({ success: true, data:payroll });
 }


 //@desc get name using workerid
//@route post /api/v1/workerpayroll/name
 exports.getworkerName = async(req , resp , next)=>{
 
    const {workerId} = req.body;
   console.log(workerId);
   
    var payroll= await Payroll.find({"workerId": workerId},{"name":1,_id:0});
 console.log(payroll[0]);
   if(!payroll){
       return resp
     .status(401)
     .json({ success: false, data: payroll});
   }
 
 
 resp
   .status(200)
   .json({ success: true, data:payroll[0] });
 }


