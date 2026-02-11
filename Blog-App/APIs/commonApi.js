import exp from 'express';
import { authenticate } from '../services/ourServices.js';
import UserTypeModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { verifyToken } from '../middlewares/verifyToken.js';
export const commonApp=exp.Router();


//login
commonApp.post('/login',async(req,res)=>{
      let usercred=req.body;
       let {token,user}=await authenticate(usercred)
       res.cookie("token",token,{
            httpOnly: true,     
         secure: false,      
         sameSite: "strict", 
       })
       res.status(201).json({message:"login success",payload:user})
   })

//logout
commonApp.get('/logout',async(req,res)=>{
      res.clearCookie('token',{secure:false,httpOnly:true,sameSite:'lax'})
    res.json({message:"Logged out successfully"})
})

//update the password take old password and then update the new password 
commonApp.put('/update-password',verifyToken,async(req,res)=>{
  //get current and new password
     const {oldPassword,newPassword}=req.body
     let userId=req.user.userId
  //check the current password is crct or not 
   let user=await UserTypeModel.findById(userId)
   if(!user){ return res.json({message:"user not found"})}
   //check old password is correct or not
  let isMatch=await bcrypt.compare(oldPassword,user.password)
  if(!isMatch){
    res.json({message:"incorrect old Password"})
  }
  //old and new password shuld not be same 
  if(oldPassword==newPassword){``
    res.json({message:"old and new password should not be same"})
  }
  //replace te old password with new password 
  
   let hashedPassword=await bcrypt.hash(newPassword,10)
   user.password=hashedPassword
   await user.save()                       
     //send response
     res.json({message:"password updated successfully"})
      
    })
  