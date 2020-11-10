const express = require('express');

const{getComplain , createComplain , deleteComplain , updateStatus} 
= require('../controllers/complains.js');

const router = express.Router();


router.route('/')
.get(getComplain)
.post(createComplain);

router.route('/:id')
.delete(deleteComplain);

router.route('/status/:id').put(updateStatus);



module.exports = router;