import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
export function verifyToken(req,res,next){
  //token verification logic

  //get token from req ( using cookie-parser )
  let signedToken = req.cookies.tokn;
  if(!signedToken){
    return res.status(401).json({message:"please login first"})
  }
  console.log(req.cookies) //{tokn : ""}

  //verify token(decode)
  let decode = jwt.verify(signedToken,'secret')
  console.log("decoded token",decode);
  next()
}