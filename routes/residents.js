const express = require('express');
const {getByBuilding , getBuildings, deleteBuilding, deleteBuildingByBlock, updateResidentDetail, deleteResident,createBuilding} = require('../controllers/residents');
const router = express.Router();


router.route('/building')
      .post(getByBuilding);

router.route('/building/:id').delete(deleteBuildingByBlock);


//router.delete('/building/:id',deleteBuilding);

router.route('/:id')
      .put(updateResidentDetail)
      .delete(deleteResident)

router.route('/buildings')
      .get(getBuildings)
      .post(createBuilding);


module.exports = router;
