const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');

const userSchema= new mongoose.Schema(
{
 name:{
    type:String,
    required:[true,'Please enter the name'],
 },

 email:{

    type:String,
    required:[true,'Please enter the email'],
    unique:true,
    validate:[validator.isEmail,'please enter valid email address']
 },
 password:{

    type:String,
    required:[true,"please enter password"],
    maxlength:[6,"password cannot exceed 6 character"],
    select:false
 },

 avatar:{

    type:String,
    required:true,
 },

 role:{

    type:String,
    default:'user'
 },

 resetPasswordToken:String,

 resetPasswordTokenExpire:Date,

 createAt:{

    type:Date,
    default:Date.now,
 }



 



}
)


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  
  this.password = await bcrypt.hash(this.password, 10);
  next();
});



userSchema.methods.getJwtToken=  function() {
 return   jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_TIME})
}

userSchema.methods.isValidPassword=async function(enteredPassword){

  return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.getResetToken=async function(){
//it generate token 
 
const token=crypto.randomBytes(20).toString('hex');
this.resetPasswordToken=crypto.createHash('sha256').update(token).digest('hex');

//set token expire time
this.resetPasswordTokenExpire=Date.now() + 30 * 60 * 1000;

return token;

}

const model=mongoose.model('User',userSchema);

module.exports=model;


