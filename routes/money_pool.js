const express = require('express');

const {getMoney , updateMoney,updateSpendMoney
, getContributers,updateLoanMoney,updateEarnedMoney
,getLoanMoney,updateContributers , getEarnedMoney ,
getSpentMoney,createLoanMoney,
createSpendMoney,createEarnedMoney ,createContributers,createMoney


} = require('../controllers/money_pool.js');

const router = express.Router();

router.route('/')
.get(getMoney)
.post(createMoney);

router.route('/:id/money')
.put(updateMoney);



router.route('/money/earn')
.get(getEarnedMoney);
router.route('/:id/earn')
.put(updateEarnedMoney);


router.route('/money/spend')
.get(getSpentMoney);
router.route('/:id/spend')
.put(updateSpendMoney);


router.route('/money/loan')
.get(getLoanMoney);
router.route('/:id/loan')
.put(updateLoanMoney);


router.route('/contributors')
.get(getContributers)
.post(createContributers);


router.route('/:id/contributors').
put(updateContributers);



module.exports = router;
