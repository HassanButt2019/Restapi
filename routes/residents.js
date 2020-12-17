const express = require('express');
const {getByBuilding , getBuildings, deleteBuilding, deleteBuildingByBlock, updateResidentDetail, deleteResident,createBuilding,updateBuilding} = require('../controllers/residents');
const router = express.Router();


router.route('/building')
      .post(getByBuilding);

//<<<<<<< HEAD
router.route('/building/:id').delete(deleteBuildingByBlock);


//router.delete('/building/:id',deleteBuilding);
//=======
router.route('/building/:id')
      .delete(deleteBuilding)
      .put(updateBuilding);
//>>>>>>> f2ef2c884cfc256a3583b6173b758991dfc320e4

router.route('/:id')
      .put(updateResidentDetail)
      .delete(deleteResident)

router.route('/buildings')
      .get(getBuildings)
      .post(createBuilding);


module.exports = router;
