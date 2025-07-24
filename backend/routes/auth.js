const express=require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserProfile, changePassword, updateProfile } = require("../controller/AuthController");

const {isAuthenticatedUser}=require('../middlewares/authenticate');

const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);
router.route('/myprofile/change').put(isAuthenticatedUser,changePassword);
router.route('/update').put(isAuthenticatedUser,updateProfile);


module.exports=router;