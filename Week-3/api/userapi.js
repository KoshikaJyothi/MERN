import exp from 'express'
export const userApp=exp.Router()

// simple middleware applied to all routes


let users=[]
userApp.get('/users',(req,res)=>{
    res.status(200).json({message: "all users",payload:users});//msg,payload
});
//post req handling route create user  
userApp.post('/users',(req,res)=>{
  //get user resource  from req body;
  let newUser=req.body;
  users.push(newUser);
  res.status(201).json({message: "User created"});
});
userApp.put('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const modifiedUser = req.body;
    const idx = users.findIndex(u => Number(u.id) === id);
    if(idx === -1){
       return res.status(404).json({message:"user not found"});
    }
    users[idx] = Object.assign({}, users[idx], modifiedUser);
    return res.status(200).json({message: 'User updated', payload: users[idx]});
});
//read user by id
userApp.get('/users/:id',(req,res)=>{
    const userid = Number(req.params.id);
    const user = users.find(userobj => Number(userobj.id) === userid);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    return res.status(200).json({message:"user",payload:user});
})
userApp.delete('/users/:id',(req,res)=>{
   
});



// (middleware moved to top so it runs for all routes)