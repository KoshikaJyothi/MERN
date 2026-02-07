import exp from 'express'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserModel from '../models/usermodel.js'
import {verifyToken} from '../middleware/verifyToken.js'
export const userApp=exp.Router()

//read user
userApp.get('/users', async (req, res) => {
    let userList = await UserModel.find()
    res.status(200).json({ message: "users", payload: userList })
})

//create user
userApp.post('/users',async(req,res)=>{
    let newuser=req.body
    let hashedPassword=await hash(newuser.password,12)
    newuser.password=hashedPassword
    let userResult=await UserModel.create(newuser)
    res.status(201).json({message:'User created',payload:userResult})
})
//user authentication route(login)
userApp.post('/users/auth',async (req,res)=>{
    //get user crd obj
    let {username,password}=req.body
    let userCred={username,password}
    //check for usernamee
    let userOfDB=await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userOfDB===null){
        return res.status(404).json({message:"Invalid username"})
    }
    //await after completing then goes for next one
    let status=await compare(userCred.password,userOfDB.password)
    if(!status){
        return res.status(404).json({message:"Password is Invalid"})
    }
    //create signed token
    let signedToken = jwt.sign({username}, 'secret', {expiresIn:10 })
    //send token in res
    res.cookie('token',signedToken,{httpOnly:true,secure:false,sameSite:'lax'})
    res.status(200).json({message:"Login Success"})
})
//read user
//update user
//test router middleware checks whether it is authenticated user or not and sends response
userApp.get('/test',verifyToken,(req,res)=>
{
    res.json({message:"test ROUTER"})
})
