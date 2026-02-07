import exp from 'express'
import Product from '../models/ProductModel.js'
const ProdRoute=exp.Router()
ProdRoute.get('/products',async (req,res)=>{
    let products=await Product.find()
    res.status(200).json({message:"Products fetched",payload:products})

})
ProdRoute.post('/products',async (req,res)=>{
    let productItem=req.body
    let ProductName=productItem.ProductName
    let eproduct=await Product.findOne({productName:ProductName})
    if(eproduct!=null){
     res.status(200).json({message:"product already exists"})
     return 
    }
    try{
        let newProduct=new Product(productItem)
        await newProduct.save()
        res.status(201).json({message:"product created "})
    }catch(err){
        res.status(500).json({message:"error",error:err.message})
    }
})
export default ProdRoute