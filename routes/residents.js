const express = require('express');
const {getByBuilding , getBuildings, deleteBuilding, deleteBuildingByBlock, updateResidentDetail, deleteResident,createBuilding,updateBuilding} = require('../controllers/residents');
const router = express.Router();


router.route('/building')
      .post(getByBuilding)
      .delete(deleteBuildingByBlock);

router.route('/building/:id')
      .delete(deleteBuilding)
      .put(updateBuilding);

router.route('/:id')
      .put(updateResidentDetail)
      .delete(deleteResident)

router.route('/buildings')
      .get(getBuildings)
      .post(createBuilding);


module.exports = router;
