const express=require('express');
const {  newOrder, getSingleOrder, myorder, orders } = require('../controller/OrderController');

const  router=express();
const {isAuthenticatedUser,authorizedRoles}=require('../middlewares/authenticate');

router.route('/order/new').post(isAuthenticatedUser,newOrder);

router.route('/order/:id').get(isAuthenticatedUser,getSingleOrder);
router.route('/myorders').get(isAuthenticatedUser,myorder);



//admin routes

router.route('/orders1').get(isAuthenticatedUser,authorizedRoles('user'),orders)
module.exports=router;


