const User = require("../models/UserModel");

exports.registerUser = async (req, res, next) => {
  const { name, email, password, avatar } = req.body;

  const user1 = await User.create({ name, email, password, avatar });

  const token = user1.getJwtToken();
  const option = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
   
  };

  return res
    .status(201)
    .cookie('token', token, option)
    .json({ success: true, user: user1, token });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter email and password" });
  }

  const user2 = await User.findOne({ email }).select('+password');

  if (!user2) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await user2.isValidPassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }

  const token = user2.getJwtToken();

  const option = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
         
  };

  return res
    .status(200)
    .cookie('token', token, option)
    .json({ success: true, user: user2, token });
};

exports.logout= (req,res,next) => {

    
  res.cookie('token',null,{
    expires:new Date(Date.now()),
    httpOnly:true
  }).status(200).json({sucess:"succesfully logedout"});


   
}
