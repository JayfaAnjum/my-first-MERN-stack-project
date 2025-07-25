const express=require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserProfile, changePassword, updateProfile, getAllUsers, getUser, updateUser, deleteUser } = require("../controller/AuthController");

const {isAuthenticatedUser,authorizedRoles}=require('../middlewares/authenticate');

const router=express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);
router.route('/myprofile/change').put(isAuthenticatedUser,changePassword);
router.route('/update').put(isAuthenticatedUser,updateProfile);

//admin routes
router.route('/admin/users').get(isAuthenticatedUser,authorizedRoles('admin'),getAllUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser,authorizedRoles('admin'),getUser);
router.route('/admin/user/:id').put(isAuthenticatedUser,authorizedRoles('admin'),updateUser);
router.route('/admin/user/:id').delete(isAuthenticatedUser,authorizedRoles('admin'),deleteUser)




module.exports=router;