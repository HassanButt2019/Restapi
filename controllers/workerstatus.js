const Status = require('../models/workerstatus');


//@desc find by workerid
//@route post /api/v1/workerstatus
exports.getworkerStatus = async(req , resp , next)=>{
 
    const {workerId} = req.body;
    console.log(workerId);
  
    var status = await Status.find({"workerId":workerId});
 console.log(status);
   if(!status){
       return resp
     .status(401)
     .json({ success: false, data: status});
   }
 
 
 resp
   .status(200)
   .json({ success: true, data:status });
 }


