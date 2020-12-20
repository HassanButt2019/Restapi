const express = require('express');

const{getComplain , createComplain , deleteComplain , updateStatus , getMyComplains }
= require('../controllers/complains.js');

const router = express.Router();
router.route('/myComplains').post(getMyComplains);

router.route('/')
.get(getComplain)
.post(createComplain);

router.route('/:id')
.delete(deleteComplain);

router.route('/status/:id').put(updateStatus);



module.exports = router;