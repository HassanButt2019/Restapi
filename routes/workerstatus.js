const express = require('express');
const {getworkerStatus,updateWorkerHours,updateWorkerDay,updateWorkerDate,updateCheckinStatus,updateCheckoutStatus} = require('../controllers/workerstatus');
const router = express.Router();



router.route('/')
    .post(getworkerStatus);

router.route('/hours')
    .post(updateWorkerHours);    


router.route('/day')
    .post(updateWorkerDay);  

router.route('/date')
    .post(updateWorkerDate);

router.route('/checkin')
    .post(updateCheckinStatus);

router.route('/checkout')
    .post(updateCheckoutStatus);

module.exports = router;
