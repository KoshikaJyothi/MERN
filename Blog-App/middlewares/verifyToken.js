import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const verifyToken= async(req,res,next)=>{
  //read token from req
  let token=req.cookies.token
  console.log("Token from cookie:",token)
  if(!token){
    return res.status(400).json({message:"Unauthorized req-Pls login"})
  }
  //verify the validity of the token//it has to be decoded and verified
let decodedToken=jwt.verify(token,process.env.JWT_SECRET)
req.user=decodedToken
  next()
  
}