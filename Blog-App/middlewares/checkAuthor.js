import UserTypeModel from '../models/userModel.js'
export const checkAuthors=async (req,res,next)=>{
    const user=req.user
    if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" })
  }
    if(req.user.role!=="AUTHOR"){
        return res.status(403).json({message:"Access denied"})
    }
    // does author exist in database
    let author=await UserTypeModel.findById(user.userId)
    if(!author){
        return res.status(404).json({message:"Author not found"})
    }
    next()
}