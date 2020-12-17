const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    phoneNumber:{
        type:String,
    },
    building:{
        type:String,
    },
    flat:{
        type:Number,
    },
    cnic:{
        type:String,
        unique:true
    },
    address:{
       type:String
    },
    type:{
        type:String,
        enum:['guard','sweeper',],
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique:true,
    },
    workerTime:{
        type:String,
    },
    Salary:{
        type:Number,
    },
    role:{
        type:String,
        enum:['head','resident','worker'],
        default:'head'
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
        minlength:8,
        select:false,
    },
    resetPasswordToken:String,
    resetPasswordDate:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

//encrypt password using bcrypt
UserSchema.pre('save',async function(next){

var user = this;
    if(!this.isModified('password')){
         next();
    }
    const salt = await bcrypt.genSalt(10);
   return this.password = await bcrypt.hash(this.password,salt);
});


// sign jwt and return
UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({id:this._id},abc123efg4321,{
        expiresIn:process.env.JWT_EXPIRE
    });
};

//generate and hash password

UserSchema.methods.getResetPasswordToken = function(){
    //generate token
    const resetToken = crypto.randomBytes(20).toString('hex');

    //hash the token
    this.resetPasswordToken = crypto.createHash(
        'sha256'
    ).update(resetToken).digest('hex');
    //set expire

    this.resetPasswordDate = Date.now() + 1 *60 * 1000;


    console.log(resetToken);
    return resetToken;
};

//match user password to hashpassword
UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password , this.password);
};
//match user role 
UserSchema.methods.CheckHead= async function(role){
    if(role === this.role)
    {
        return await true;
    }else
    {
        return await false;
    }
};




module.exports = mongoose.model('User',UserSchema);
