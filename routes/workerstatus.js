const express = require('express');
const {getworkerStatus} = require('../controllers/workerstatus');
const router = express.Router();



router.route('/')
    .post(getworkerStatus);

module.exports = router;
