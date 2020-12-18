const express = require('express');

const {getMoney , updateMoney,updateSpendMoney
, getContributers,updateLoanMoney,updateEarnedMoney
,getLoanMoney,updateContributers , getEarnedMoney ,
getSpentMoney,createContributers,createMoney


} = require('../controllers/money_pool.js');

const router = express.Router();


const {protect} = require('../middlewares/auth');

router.route('/')
.get(getMoney)
.post(protect,createMoney);

router.route('/currentmoney')
.put(/*protect,*/updateMoney);



router.route('/earnmoney')
.get(getEarnedMoney);
router.route('/earnmoney')
.put(/*protect,*/updateEarnedMoney);


router.route('/spendmoney')
.get(getSpentMoney);
router.route('/spendmoney')
.put(/*protect,*/updateSpendMoney);



router.route('/contributors')
.get(getContributers)
.post(createContributers);


router.route('/contributors').
put(protect,updateContributers);




module.exports = router;
