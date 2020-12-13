const express = require('express');
const {getworkerStatus,updateWorkerHours,updateWorkerDay,updateWorkerDate} = require('../controllers/workerstatus');
const router = express.Router();



router.route('/')
    .post(getworkerStatus);

router.route('/hours')
    .post(updateWorkerHours);    


router.route('/day')
    .post(updateWorkerDay);  

router.route('/date')
    .post(updateWorkerDate);

module.exports = router;
