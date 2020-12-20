const express = require('express');

const {getMoney,updateMoneyPool,updateContributers,getContributers ,createMoney } = require('../controllers/money_pool.js');

const router = express.Router();
const {protect} = require('../middlewares/auth');




router.route('/')
.get(getMoney)
.post(updateMoneyPool);

router.route('/createMoney').post(createMoney);






router.route('/contributors')
.get(getContributers);


router.route('/contributors').post(updateContributers);




module.exports = router;
