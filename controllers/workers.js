
const User = require('../models/user');
//@desc find by workers
//@route post /api/v1/workers
exports.getWorkers = async(req , resp , next)=>{
   const {type} = req.body;



  var workers = await User.find({"type":type});
  console.log(workers);

  if(!workers){
      return response
    .status(401)
    .json({ success: false, msg: "Worker Not Found" });
  }


resp
  .status(200)
  .json({ success: true, data:workers });
}