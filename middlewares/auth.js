const jwt = require('jsonwebtoken');
const User = require('../models/user');



//protect routes

exports.protect = async (req , resp , next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token  =  req.headers.authorization.split(' ')[1];

    }
    // else if (req.cookies.token){
    //     token = req.cookies.token;
    // }

    // make sure token exists
    if(!token){
        return resp.status(401).json({success:false , msg:'Not authorized to this route'});       
    }

    try {
        //veryfy token
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        console.log(decoded);

        req.user = await User.findById(decoded.id);
        next();
        
    } catch (error) {
        
    }

}