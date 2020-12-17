const User = require('../models/user');


//@desc deletes building by block
//@route delete /api/v1/resident/building     requires body
exports.deleteBuildingByBlock = async( req, res, next) => {
  try {
    console.log(req.params.id);
    const user = await User.deleteMany({ "building" : req.params.id }) ;
  
    if(!user){
      return res.status(400),json({success: false});
    }

    res.status(200).json({success: true, data: req.params.id});
  } catch (err) {
    res.status(400).json({success: false});
    
  }
}


//@desc deletes building by id
//@route delete /api/v1/resident/building/:id
exports.deleteBuilding = async( req, res, next) => {
  try {
    console.log("HELLLOOOO");
    const user = await User.findByIdAndDelete(req.params.id);
  

    if(!user){
      return res.status(400),json({success: false});
    }

    res.status(200).json({success: true, data:{} });
  } catch (err) {
    res.status(400).json({success: false});
    
  }
}


//@desc find by building
//@route get /api/v1/resident/building
exports.getByBuilding = async(req , resp , next)=>{
    const {building} = req.body;
    console.log(building);
    var user = await User.find({"building":building});
  
    if(!user){
        return response
      .status(401)
      .json({ success: false, msg: "Building Not Found" });
    }


  resp
    .status(200)
    .json({ success: true, data:user });
};



//@desc find by building
//@route get /api/v1/resident/buildings
exports.getBuildings = async(req , resp , next)=>{
  // const {building} = req.body;

  var building = "abx";


  console.log(building);
  var buildings = await User.find({"role":["resident","head"]} , {building});

  if(!buildings){
      return response
    .status(401)
    .json({ success: false, msg: "Building Not Found" });
  }


resp
  .status(200)
  .json({ success: true, data:buildings });
};



//@desc update user details by id
//@route put /api/v1/resident/:id
exports.updateResidentDetail = async( req, res, next) => {
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



//@desc delete resident by id
//@route delete /api/vi/resident/:id
exports.deleteResident = async (req,response , next)=>{//note: there is no check that if a person is worker or not
 
  const user = await User.findById(req.params.id);
  //console.log(user);
  if(!user){
      response.status(400).json({ success: false, msg: `Resident not found with id ${req.params.id}` });
  }
  if(user.role == "resident")
  {
//  user.remove();
  response.status(200).json({success: true, msg: "Resident deleted"});
  }
  else{
    response.status(400).json({ success: false, msg: `Resident not found with id ${req.params.id}` });
  }
};



//@desc create building
//@route post / api/v1/buildings
//@access private

exports.createBuilding = async (req,response , next)=>{
  try{
      console.log(req.body);
  const user =await User.create(req.body);
  console.log(req.body);
  response.status(201).json({ success: true, data: req.body });
  }catch(err){
      response.status(400).json({ success: false, msg: "data not found" });
  }
  // response.status(200).json({ success: true, msg: "created complain" });
};





//@desc update building name
//@route put /api/v1/building/:id
exports.updateBuilding = async( req, res, next) => {
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