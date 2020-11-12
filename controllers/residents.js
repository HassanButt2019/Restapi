const User = require('../models/user');


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
}



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
}