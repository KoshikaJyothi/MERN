import exp from 'express'
import {connect} from 'mongoose'
import UserRoute from './APIs/userApi.js'
import ProdRoute from './APIs/productApi.js'

//create http server
const app=exp()
const port=4000
//connect to  mongodb database
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/E-commerce")
        console.log("Connected DB")
        app.listen(port,()=>{
             console.log("Server is running")
        })
    }catch(err){}
}
connectDB()
//use body parser middleware
app.use(exp.json())
//forward req to specify APIs
app.use('/product-api',ProdRoute)
app.use('/user-api',UserRoute)
//Error handling middleware 