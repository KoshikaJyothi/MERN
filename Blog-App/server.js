import exp from 'express';
import {connect} from 'mongoose';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import adminApp from './APIs/adminApi.js';
import authorApp from './APIs/authorApi.js';
import userApp from './APIs/userApi.js';
import { commonApp } from './APIs/commonApi.js';    
config()   //process.env
const app = exp();
const connectDB=async()=>{
    try{
     await connect(process.env.DB_URL)
     console.log("DB connected");
     app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
     });
    }
    catch(err){
        console.log("DB connection error",err);
    }
}
connectDB();

//body parser middleware
app.use(exp.json());
//cookie parser middleware
app.use(cookieParser());
app.use('/user-api',userApp);
app.use('/admin-api',adminApp);
app.use('/author-api',authorApp);
app.use('/common-api',commonApp);
//dealing with invalid path
app.use((req,res,next)=>{
    res.json({message:`${req.url} is invalid path found`})
})
//error handling middleware
app.use((err,req,res,next)=>{
    //here next() is used to pass the control to next middleware
    console.log("err :",err)
    res.json({message:"Something went wrong",error:err.message});
})