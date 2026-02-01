import exp from 'express'
export const productApp=exp.Router()
let products=[];
//get request handling read product details
productApp.get('/products',(req,res)=>{
  res.status(200).json({message: "all products",payload:products})
})

//push to  create new product item details
productApp.post('/products',(req,res)=>{
   let newproduct=req.body;
   console.log(newproduct)
  products.push(newproduct);
  res.status(201).json({message: "Product Added Successfully"});
})

//put req handling to modify any changes 
productApp.put('/products/:id',(req,res)=>{
   const id = req.params.id;
   const updated = req.body;
   const idx = products.findIndex(p => String(p.id) === String(id));
   if(idx === -1){
     return res.status(404).json({message: 'Product not found'});
   }
   products[idx] = Object.assign({}, products[idx], updated);
   return res.status(200).json({message: 'Product updated', payload: products[idx]});
})

//delete req handling to delete any products
productApp.delete('/products/:id',(req,res)=>{
  const id = req.params.id;
  const idx = products.findIndex(p => String(p.id) === String(id));
  if(idx === -1){
    return res.status(404).json({message: 'Product not found'});
  }
  const removed = products.splice(idx,1)[0];
  return res.status(200).json({message: 'Product deleted', payload: removed});
})

// read product by id
productApp.get('/products/:id',(req,res)=>{
  const id = req.params.id;
  const product = products.find(p => String(p.id) === String(id));
  if(!product) return res.status(404).json({message: 'Product not found'});
  return res.status(200).json({message: 'product', payload: product});
})

