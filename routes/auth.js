const express = require('express');

const {protect} = require('../middlewares/auth');

const {register , login , getMe , forgetpassword , resetPassword , registerWorker } = require('../controllers/auth');

const router = express.Router();


router.get('/hell',(req,res)=>{
res.send("HELLO WORLLD");
});



router.post('/register',register);

router.post('/login',login);

router.post('/me',getMe);
router.post('/forgetpassword',forgetpassword);
router.put('/resetpassword/:resettoken',resetPassword);
router.post('/registerWorker',registerWorker);


router.post('/forgetpassword',forgetpassword);
module.exports = router; 

 
