import ex from 'express'
import {verifyToken} from '../middlewares/verifyToken.js'
import UserTypeModel from '../models/userModel.js'
import ArticleTypeModel from '../models/ArticleModel.js'
import {register,authenticate} from '../services/ourServices.js'
import { checkAuthors } from '../middlewares/checkAuthor.js'
import mongoose from 'mongoose'
const authorApp=ex.Router()
//DRY principle-Don't Repeat Yourself
//Register author
authorApp.post('/users',async(req,res)=>{
    const authorObj=req.body
    const author=await register({...authorObj,role:'author'})
    res.status(201).json({message:"Author created",payload:author})
})
//authenticate author
authorApp.post('/login',async(req,res)=>{
    //get user credentials from request body
    const userObj=req.body
    //authenticate user
    let {user,token}=await authenticate(userObj)
    //save token in cookie
    res.cookie('token',token,{httpOnly:true,sameSite:'lax',secure:false})
    //send response
    res.status(200).json({message:"User authenticated",user})
})
//create article
authorApp.post('/articles',async(req,res)=>{
   try{
   //get article details from request body
   const ArticleObj=req.body
  //validate author id
  if(!ArticleObj.author){
    return res.status(400).json({message:"Author ID is required"})
  }
  //check for the author id
  const author=await UserTypeModel.findById(ArticleObj.author)
  if(!author||author.role!="author"){
    return res.status(404).json({message:"Author not found"})
  }
  //create article
  const article=new ArticleTypeModel(ArticleObj)
  let createdArticle=await article.save()
  //send response
  res.status(201).json({message:"Article created",createdArticle})
  }catch(err){
    console.log("Error creating article:",err.message)
    res.status(500).json({message:"Error creating article",error:err.message})
  }
})
//edit article
authorApp.put('/articles/:id/author/:authorid',async(req,res)=>{
    const {id,authorid}=req.params
    const articleUpdate=req.body
    const article=await ArticleTypeModel.findByIdAndUpdate(id,articleUpdate,{new:true})
    if(!article) return res.status(404).json({message:"Article not found"})
    res.status(200).json({message:"Article updated",article})
})
//read articles of author
authorApp.get('/articles/:id',async(req,res)=>{
  try{
    let authorid=req.params.id
    console.log("Author ID:",authorid)
    let articles=await ArticleTypeModel.find({author:authorid})
    if(!articles) return res.status(404).json({message:"Articles not found"})
    res.status(200).json({message:"Articles",articles})}
  catch(err){
    res.status(400).json({message:'invalid author id',error:err.message})
  }
})
authorApp.get('/articles/:authorid',checkAuthors,async(req,res)=>{
    let authorid=req.params.authorid
    let articles=await ArticleTypeModel.find({author:authorid})
    if(!articles) return res.status(404).json({message:"Articles not found"})
    res.status(200).json({message:"Articles",articles})
})

//soft delete article
authorApp.put('/articles/:id',verifyToken,checkAuthors,async(req,res)=>{
  const {id}=req.params
  const authorId=req.user.userId
  //check if the article of the author is from the client
  const article = await ArticleTypeModel.findOneAndUpdate(
      { _id: id, author: authorId },{ isArticleActive: false },{ new: true })
  if(!article) return res.status(404).json({message:"Article not found"})
  if(article.author.toString()!==authorId){
    return res.status(403).json({message:"You are not authorized to delete this article"})
  }
  const updatedArticle=await ArticleTypeModel.findByIdAndUpdate(id,{isArticleActive:false},{new:true})
  res.status(200).json({message:"Article soft deleted",updatedArticle })
})
export default authorApp