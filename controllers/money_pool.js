const money_pool = require("../models/money_pool");


exports.updateMoneyPool = async(req , response , next) =>{

try{
console.log(req.body.currentMoney);
    const moneypool = await money_pool.updateMany(
    {} ,
    {$set:
    {
    "currentMoney":req.body.currentMoney,
    "earnedMoney": req.body.earnedMoney,
    "spendMoney": req.body.spendMoney,
    }
    }
    );
    response.status(201).json({ success: true, data: moneypool });
}catch(err)
{
response.status(400).json({ success: false });
}
}

//@desc create  money pool
//@route POST /api/v1/money_pool
//@access private
//ok
exports.createMoney = async (req, response, next) => {
  try {
    const money = await money_pool.create(req.body);
    console.log(req.body);
    response.status(201).json({ success: true, data: req.body });
  } catch (err) {
    response.status(400).json({ success: false, msg: "data not found" });
  }
};






//@desc get all money pool Data
//@route GET /api/v1/money_pool
//@access private
//ok
exports.getMoney = async (req, response, next) => {
  try {
    const money = await money_pool.find();
    console.log(money);
    response.status(200).json({ success: true, data: money });
  } catch (err) {
    response.status(400).json({ success: false });
  }
};


////@desc update total money
////@route PUT /apiv1/moneypool/currentmoney
////@access private
////ok
//exports.updateMoney = async (req, response, next) => {
//  try {
//    console.log(req.body);
//    const money = await money_pool.findOneAndUpdate(req.body);
//
//    if (!money) {
//      return response
//        .status(400)
//        .json({ success: false, msg: "property not found" });
//    }
//    response.status(200).json({ success: true , msg:'You have successfully contributed'});
//  } catch (err) {
//    response.status(400).json({ success: false, msg: "property not found" });
//  }
//};

//@desc get all contributors
//@route GET /apiv1/money_pool/contributors
//@access private
//ok
exports.getContributers = (req, response, next) => {
  response.status(200).json({ success: true, msg: "Show contributors" });
};


//@desc add  contributors
//@route PUT /apiv1/money_pool/contributors
//@access private
//ok
exports.updateContributers = async (req, response, next) => {
  console.log(req.body);
  try {
    const money = await money_pool.updateOne(
      {

      },
      {
        $push:
        {
          'contributors': req.body,
        },
      }
    );

    if (!money) {
      return response.status(400).json({ success: false });
    }
    response.status(200).json({ success: true, msg: money });
  } catch (err) {
    response.status(400).json({ success: false, msg: err });
  }
};
