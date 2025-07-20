const express=require('express');
const { createOrder } = require('../controller/OrderController');

const  router=express();


router.route('/order').post(createOrder);

module.exports=router;


