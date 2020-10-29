const money_pool = require('../models/money_pool');



//@desc get all money pool Data
 //@route GET /apiv1/money_pool
 //@access private
 //ok
 exports.getMoney = async (req,response , next)=>{
 try
 {
 const money = await money_pool.find();
  response.status(200).json({success:true , data:money});

 }catch(err)
 {
  response.status(400).json({success:false});
 }
 }
 //@desc create  money pool
 //@route POST /apiv1/money_pool
 //@access private
 //ok
 exports.createMoney = async (req,response , next)=>{
 try{
 const money = await money_pool.create(req.body);
 console.log(req.body);

 response.status(201).json({success:true , data:req.body});
 } catch(err)
 {
 response.status(400).json({success:false , msg:"data not found"});
 }
 }
//@desc update total money
//@route PUT /apiv1/money_pool/:id/money
//@access private
//ok
exports.updateMoney = async (req,response , next)=>{
try{

const money = await money_pool.findByIdAndUpdate(req.params.id,req.body);

if(!money)
{
return  response.status(400).json({success:false , msg:"property not found"});
}
response.status(200).json({success:true , data:money});
} catch(err)
{
 response.status(400).json({success:false , msg:"property not found"});
}
}







//@desc get all contributors
//@route GET /apiv1/money_pool/contributors
//@access private
//ok
exports.getContributers = (req,response , next)=>{
response.status(200).json({success:true , msg:"Show contributors"});
}

//@desc create all contributors
//@route GET /apiv1/money_pool/contributors
//@access private
//ok
exports.createContributers = (req,response , next)=>{
response.status(200).json({success:true , msg:"Show contributors"});
}


//@desc add  contributors
//@route PUT /apiv1/money_pool/id/contributors
//@access private
//ok
exports.updateContributers = async (req,response , next)=>{

    console.log(req.body);
    try{
        const money = await money_pool.
        update(
            { 
                _id :req.params.id
            },
        {
        $push:{    
            contributors:req.body
        }
    }
    
    );
        if(!money)
        {
            return response.status(400).json({success:false});
        }
        response.status(200).json({success:true , msg: money});
    }catch(err)
    {
        response.status(400).json({success:false , msg: err});
    }

}





//@desc get earned money
//@route GET /apiv1/money_pool/earned
//@access private
//ok
exports.getEarnedMoney = (req,response , next)=>{
response.status(200).json({success:true , msg:"Show earned money"});
}
//@desc get spennd money
//@route GET /apiv1/money_pool/spend
//@access private
//ok
exports.getSpentMoney = (req,response , next)=>{
response.status(200).json({success:true , msg:"Show Spent money"});
}
//@desc get loan money
//@route GET /apiv1/money_poo/loan
//@access private
//ok
exports.getLoanMoney = (req,response , next)=>{
response.status(200).json({success:true , msg:"Show loan money"});
}

//@desc update earned money
//@route PUT /apiv1/money_pool/earned
//@access private
//ok
exports.updateEarnedMoney = async (req,response , next)=>{
try{
const money = await money_pool.findByIdAndUpdate(req.params.id,req.body);
console.log(req.body);
response.status(200).json({success:true , msg:req.body});

if(!money)
{
response.status(400).json({success:false});
}

}catch(err)
{
response.status(400).json({success:false , msg:"property not found"});
}
}
//@desc update spend money
//@route PUT /apiv1/money_pool/spend
//@access private
//ok
exports.updateSpendMoney = async (req,response , next)=>{
try{
const money = await money_pool.findByIdAndUpdate(req.params.id,req.body);
response.status(200).json({success:true , msg:req.body});
if(!money)
{
response.status(400).json({success:false});
}
}catch(err)
{
response.status(400).json({success:false , msg:"property not found"});
}
}
//@desc update loan money
//@route PUT /apiv1/money_pool/spend
//@access private
//ok
exports.updateLoanMoney = async (req,response , next)=>{
try{
const money = await money_pool.findByIdAndUpdate(req.params.id,req.body);
response.status(200).json({success:true , msg:req.body});
if(!money)
{
response.status(400).json({success:false});
}
}catch(err)
{
response.status(400).json({success:false , msg:"property not found"});
}
}


//@desc create earned money
//@route POST /apiv1/money_pool/earned
//@access private
//ok
exports.createEarnedMoney = (req,response , next)=>{
response.status(200).json({success:true , msg:"create Earned money"});
}
//@desc create spend money
//@route POST /apiv1/money_pool/spend
//@access private
//ok
exports.createSpendMoney = (req,response , next)=>{
response.status(200).json({success:true , msg:"create Spend money"});
}
//@desc create loan money
//@route PUT /apiv1/money_pool/spend
//@access private
//ok
exports.createLoanMoney = (req,response , next)=>{
response.status(200).json({success:true , msg:"create Loan money"});
}







