const express = require('express');
const {getWorkers} = require('../controllers/workers');
const router = express.Router();



router.post('/',getWorkers);



module.exports = router;
