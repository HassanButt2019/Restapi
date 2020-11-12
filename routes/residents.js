const express = require('express');
const {getByBuilding , getBuildings} = require('../controllers/residents');
const router = express.Router();



router.post('/building',getByBuilding);


router.get('/buildings',getBuildings);


module.exports = router;
