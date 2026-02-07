import exp from 'express'
import Product from '../models/ProductModel.js'
import User from '../models/UserModel.js'
const  UserRoute=exp.Router()

UserRoute.get('/users',async (req,res)=>{
    let users=await User.find({},{name:1,email:1,_id:1})
    res.status(200).json({meassage:"user fetched",payload:users})
})
UserRoute.post('/users',async (req,res)=>{
    let userObj=req.body
    let user=new User(userObj)
    let euser=await User.findOne({email:userObj.email})
    if(euser){
        return res.status(400).json({meassage:"user already existed"})
    }
  await user.save()
  res.status(201).json({message:"user Created "})
})

UserRoute.put('/user-cart/user-id/:uid/product-id/:pid',async (req,res)=>{
      //read uid pid from url parameters
      let {uid,pid}=req.params //{uid:'',pid:''}
      //check user
      let user=await User.findById(uid)
      if(!user){
        return res.status(401).json({message:"User not found"})
      }
      //check product
      let product=await Product.findById(pid)
      if(!product){
        return res.status(401).json({message:"product not found"})
      }
      //perform update
      let modifiedUser=await User.findByIdAndUpdate(
        uid,{$push:{cart:{product:pid}}},{new:true}
      )
      res.status(200).json({meassage:"Product added successfully",payload:modifiedUser})

})
UserRoute.get('/users/:uid',async (req,res)=> {
    let {uid}=req.params
    let user=await User.findById(uid).populate("cart.product","productName price")

    res.status(200).json({message:"user",payload:user})
    
})

// UserRoute.put('/users/cart',async (req,res)=>{
//     let {uid,pid,quant}=req.params
//     let user=await User.findByIdAndUpdate(
//     userId,{"cart.product": productId},{$set: {"cart.$.quantity": quantity}},{new:true})
//   if(!user){
//     return res.status(404).json({message:"user or product not found"})
//   }
//   res.status(200).json({message: "Cart quantity updated",payload: user.cart});
// })
UserRoute.put('/users/cart', async (req, res) => {
const { userId, productId, quantity } = req.body;
try {const user = await User.findOneAndUpdate(
            {_id: userId,"cart.product": productId},
            {$set: {"cart.$.quantity": quantity}},
            { new: true}
        );
        if (!user) {
            return res.status(404).json({message: "User or product not found in cart"});
        }
        res.status(200).json({message: "Quantity updated",payload: user.cart});
    } catch (err) {res.status(500).json({message: err.message});
    }
})
UserRoute.get('/compare/:id',async (req,res)=>{
  let productId=req.params.pid
  let prod=await Product.findById(productId)
  if(productId==prod){
    console.log("Equal")
  }else{
    console.log("Not equal")
  }
})

export default UserRoute