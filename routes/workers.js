const express = require('express');
const {getWorkers, deleteWorkerByNameAndType, updateWorkerDetail} = require('../controllers/workers');
const router = express.Router();



router.route('/')
    .post(getWorkers)
    .delete(deleteWorkerByNameAndType);

router.route('/:id')
    .put(updateWorkerDetail);


module.exports = router;
