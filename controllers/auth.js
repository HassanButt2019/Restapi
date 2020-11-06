const crypto = require("crypto");
const User = require("../models/user");
const sendEmail = require("../utils/sendemail");
const jwt = require('jwt-simple');






//@desc register user
//@route get /api/vi/auth/register
//@access public

exports.register = async (req, response, next) => {
  const { name, email, password, role } = req.body;
  var user;

  if((!req.body.email) || (!req.body.password)){
    return response.json({success:false , msg:'Enter All Fields'});
  }else 
  {
  //create user
  user = User({
       name,
      email,
      password,
      role,

  });
  user.save(function(err,user){
if(err){
response.json({success:false , msg:'Failed To Save'});
}else
{
response.json({success:true , msg:'Save successfully'});
}
  })
   }

};

//@desc login user
//@route post /api/vi/auth/login
//@access public

exports.login = async (req, response, next) => {
  const { email, password } = req.body;

  //validate email and password

  console.log(email , password);
  if (!email || !password) {
    return response
      .status(400)
      .json({ success: false, msg: "Provide valid email and password" });
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');


  if (!user) {
    return response
      .status(401)
      .json({ success: false, msg: "Authentication Failed , User Not Found" });
  }
  //check for password
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return response
      .status(401)
      .json({ success: false, msg: "Invalid Credentials" });
  }
  sendTokenResponse(user, 200, response);

  //return next();
  // //create token
  // const token = user.getSignedJwtToken();
  // response.status(200).json({success:true , token});
};

//get token from model , create cookie and send response

const sendTokenResponse = (user, statusCode, response) => {
  //create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    HtppOnly: false,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  return response
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};

//@desc get current login user
//@route post /api/vi/auth/me
//@access private
exports.getMe = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
};

//@desc forget password
//@route post /api/vi/auth/forgetpassword
//@access private
exports.forgetpassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({
      success:false,
      msg: "There is no such user",
    });
   // next();
  }

  //get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // create reset url
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetpassword/${resetToken}`;

  const message = `${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password reset",
      message,
    });

    return res.status(200).json({ success: true, token:resetToken });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordDate = undefined;

    await user.save({ validateBeforeSave: false });
  return  res.status(500).json({ success: false, msg: "Email not sent" });
  //  next();
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

//@desc reset password
//@route put /api/vi/auth/resetpassword/:resettoken
//@access public
exports.resetPassword = async (req, res, next) => {
  //get hashed token

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
  });
  if (!user) {
    return res.status(400).json({
      success: false,
      msg: "Invalid token",
    });
    next();
  }

  //set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordDate = undefined;
  await user.save();
 //sendTokenResponse(user, 200, res);

  return res.status(200).json({
    success: true,
    data: user,
  });
};
