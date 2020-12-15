const complains = require("../models/complains");


//@desc get all complains
//@route get / api/vi/complains
//@access provate
exports.getComplain = async(req,response,next) => {
    try{
        const complain = await complains.find();
        console.log(complain);
        response.status(200).json({ success: true, data: complain });

    }catch(err)
    {
        response.status(400).json({ success: false  , msg:err});
    }
}

exports.getMyComplains = async(req,response,next)=>{
try
{
const complain = await complains.find({ email: req.body.email});
    response.status(201).json({ success: true, data: complain });
}catch(err)
{
 response.status(400).json({ success: false, msg: "data not found" });
}

}

//@desc create complain
//@route post / api/vi/complains
//@access private

exports.createComplain = async (req,response , next)=>{
    try{
    console.log(req.body);
    const complain =await complains.create(req.body);
    console.log(req.body);
    response.status(201).json({ success: true, data: complain });
    }catch(err){
        response.status(400).json({ success: false, msg: "data not found" });
    }
    // response.status(200).json({ success: true, msg: "created complain" });
}

//@desc update status
//@route post / api/vi/complains/status
//@access private

exports.updateStatus = async (req,response , next)=>{
    try{
  
    const complain =await complains.findOneAndUpdate({"_id":req.params.id},
        
        { $set:req.body} , { new: true}
        );
    console.log(req.params.id);
    console.log(req.body);
    response.status(201).json({ success: true, data: req.body });
    }catch(err){
        response.status(400).json({ success: false, msg: "data not found" });
    }
    // response.status(200).json({ success: true, msg: "created complain" });
}


//@desc delete complain
//@route delete /api/vi/complains/:id
exports.deleteComplain = async (req,response , next)=>{
    response.status(200).json({ success: true, msg: "delete complain" });
}