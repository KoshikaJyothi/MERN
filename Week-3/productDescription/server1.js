import exp from 'express';
const product=exp()
const PORT = 4000;
product.use(exp.json());

product.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
let products=[];
//get request handling read product details
product.get('/products',(req,res)=>{
  res.status(200).json({message: "all products",payload:products})
})

//push to  create new product item details
product.post('/products',(req,res)=>{
   let newproduct=req.body;
   console.log(newproduct)
  products.push(newproduct);
  res.status(201).json({message: "Product Added Successfully"});
})

//put req handling to modify any changes 
product.put('/product/id',(req,res)=>{
   
})

//delete req handling to delete any products
product.delete('/products/id',(req,res)=>{
 
})
