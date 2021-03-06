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



 //@desc update worker hours
//@route post /api/v1/workerstatus/hours
exports.updateWorkerHours = async(req , resp , next)=>{
  
  var obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj.hoursWorked);
  console.log(obj.workerId);
  const hours = await Status.updateOne(
    { "workerId" : obj.workerId },
    { $set: { "hoursWorked" :obj.hoursWorked } }
 );
//console.log(hours);
 if(!hours){
     return resp
   .status(401)
   .json({ success: false, msg:"error"});
 }


resp
 .status(200)
 .json({ success: true,msg:"Successfully updated " });
}


 //@desc update worker day
//@route post /api/v1/workerstatus/day
exports.updateWorkerDay = async(req , resp , next)=>{

  var obj = JSON.parse(JSON.stringify(req.body))
  console.log(obj.day);
  
  const day = await Status.updateOne(
    { "workerId" : obj.workerId },
    { $set: { "day" :obj.day } }
 );
  

 // console.log(req.body);
  //const day = await Status.findOneAndUpdate({"workerId":workerId,"day":dayg}); //note that the upperone will update so first write the hours then workerid

  

 if(!day){
     return resp
   .status(401)
   .json({ success: false, msg:"error"});
 }


resp
 .status(200)
 .json({ success: true, msg:"Successfully updated" });
}



 //@desc update worker date
//@route post /api/v1/workerstatus/date
exports.updateWorkerDate = async(req , resp , next)=>{

  var obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj.date);
  
  const date = await Status.updateOne(
    { "workerId" : obj.workerId },
    { $set: { "date" :obj.date } }
 );
  
 if(!date){
     return resp
   .status(401)
   .json({ success: false, msg:"error"});
 }


resp
 .status(200)
 .json({ success: true, msg:"Successfully updated" });
}




//@desc updateCheckinStatus time
//@route post /api/v1/workerstatus/checkin
exports.updateCheckinStatus = async(req , resp , next)=>{

  var obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj.checkin, "=----");
  const checkin = await Status.updateOne(
    { "workerId" : obj.workerId },
    { $set: { "checkin" :obj.checkin } }
 );
  
 if(!checkin){
     return resp
   .status(401)
   .json({ success: false, msg:"error"});
 }


resp
 .status(200)
 .json({ success: true, msg:"Successfully updated" });
}




//@desc updateCheckoutStatus time
//@route post /api/v1/workerstatus/checkout
exports.updateCheckoutStatus= async(req , resp , next)=>{

  var obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj.checkout,"---out-");

  const checkout = await Status.updateOne(
    { "workerId" : obj.workerId },
    { $set: { "checkout" :obj.checkout } }
 );
  
 if(!checkout){
     return resp
   .status(401)
   .json({ success: false, msg:"error"});
 }


resp
 .status(200)
 .json({ success: true, msg:"Successfully updated" });
}