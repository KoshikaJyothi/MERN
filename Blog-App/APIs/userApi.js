import exp from 'express'
import { register,login, authenticate } from '../services/ourServices.js';
const userApp=exp.Router();
//register user
//authinticate user
//read all articles
userApp.post('/users',async(req,res)=>{
    let userObj=req.body
    const newUserObj=await register({...userObj,role:"user"})
    res.status(201).json({message:"user created",payload:newUserObj})
})


//read all articles
userApp.get('/user-api/articles',async(req,res)=>{
    //fetch all active articles from database
    const articles=await ArticleTypeModel.find({isArticleActive:true})
    res.status(200).json({message:"Articles",articles})
                                        
}) 
//add comment to articles 
userApp.post('/user-api/articles/:id/comments',async(req,res)=>{
    const commentObj=req.body
    if(!commentObj.article){
        return res.status(400).json({message:"article id is required"})
    }
    const article=await ArticleTypeModel.findById(commentObj.article)
    if(!article||!article.isArticleActive){
        return res.status(400).json({message:"article is not found/ not active"})
    }

})
export default userApp;
  