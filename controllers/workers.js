
const User = require('../models/user');
//@desc find by workers
//@route post /api/v1/workers
exports.getWorkers = async(req , resp , next)=>{
   const {type} = req.body;
  console.log(type);


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


//@desc delete by workers
//@route delete /api/v1/workers
exports.deleteWorkerByNameAndType = async( req, res, next) => {
  try {
    const {name} = req.body;
     const {type} = req.body;
   // console.log(name,type);
  
    const user = await User.findOneAndDelete({ "name" : name, "type": type });
  
    if(!user){
      return res.status(400),json({success: false});
    }

    res.status(200).json({success: true, data:{} });
  } catch (err) {
    res.status(400).json({success: false});
    
  }
}



//@desc update worker details by id
//@route put /api/v1/workers/:id
exports.updateWorkerDetail = async( req, res, next) => {  //note: there is no check that if a person is worker or not
  try {
   
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //to get updated or new data
      runValidators: true, //to run validator on data as well
  });
  
    if(!user){
      return res.status(400),json({success: false});
    }

    res.status(200).json({success: true, data: user });
  } catch (err) {
    res.status(400).json({success: false});
    
  }
}