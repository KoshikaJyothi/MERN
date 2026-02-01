// import express module
import exp from 'express';
import {userApp} from './api/userapi.js'
import {productApp} from './api/productapi.js'
// if we do not mention the path,it will directly check in node_modules
//Create HTTP server
const app=exp();
let PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(exp.json());//middleware to parse json body
app.use('/user-api',userApp)
app.use('/product-api',productApp)