const express = require('express');
const {getworkerPayroll,getworkerName} = require('../controllers/workerpayroll');
const router = express.Router();

router.route('/')
    .post(getworkerPayroll);

router.route('/name')
    .post(getworkerName);

module.exports = router;
