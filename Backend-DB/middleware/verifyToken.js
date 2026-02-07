import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
export function  verifyToken(req,res,next){
    //token verification logic

       let signedToken=req.cookies.token
       if(!signedToken){
        return res.status(401).json({message:"Please login first"})
       }
    //verify token(decade)
    try{
    let decodedToken=jwt.verify(signedToken,'secret')
    console.log(decodedToken)
    next()
    }
    catch(err){
        return res.status(404).json({message:"Invalid user"})
    }
}