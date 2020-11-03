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

router.route('/:id/money')
.put(protect,updateMoney);



router.route('/money/earn')
.get(getEarnedMoney);
router.route('/:id/earn')
.put(protect,updateEarnedMoney);


router.route('/money/spend')
.get(getSpentMoney);
router.route('/:id/spend')
.put(protect,updateSpendMoney);


router.route('/money/loan')
.get(getLoanMoney);
router.route('/:id/loan')
.put(protect,updateLoanMoney);


router.route('/contributors')
.get(getContributers)
.post(protect,createContributers);


router.route('/:id/contributors').
put(protect,updateContributers);




module.exports = router;
