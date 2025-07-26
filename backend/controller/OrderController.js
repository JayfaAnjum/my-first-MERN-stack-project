const User = require('../models/UserModel'); 


const Order= require('../models/OrderModel');


exports.newOrder= async (req,res,next)=>{

const{
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    orderStatus,
    totalprice,
    payementInfo
}=req.body

   const order=await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalprice,
    orderStatus,
    payementInfo,
    paidAt:Date.now(),
    user:req.user.id//we can get it from the isAuthenticated method
   })
 res.status(200).json({

        sucess:true,
        message:'new order is created succesfully',
        order
    })

}

exports.getSingleOrder=async(req,res,next)=>{

    const order=await Order.findById(req.params.id).populate('user','name email');

    if(!order){
        res.json({message:"there is no such order"});
    }
res.json({message:'order sucessfully got',order});

}

exports.myorder=async(req,res,next)=>{

    const orders=await Order.find({user: req.user.id});

    if(!orders){
        res.json({message:"there is no such order"});
    }
res.json({message:'order sucessfully got',orders});
}

exports.orders=async(req,res,next)=>{

    const orders=await Order.find({});

    

    if(!orders){
        res.json({message:"there is no such order"});
    }

    let totalamount=0;

    orders.forEach(element => {
       totalamount+=element.totalprice;
    });
res.json({

    sucess:true,
        totalamount,
        orders
});
}