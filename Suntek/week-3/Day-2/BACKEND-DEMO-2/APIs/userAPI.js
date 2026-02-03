import Express from 'express'
import {hash,compare} from 'bcryptjs'
import {product, UserModel } from '../Models/UserModel.js'
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import {verifyToken} from "../middlewares/verifyToken.js"
export const userApp = Express.Router();
export const productApp = Express.Router();



// Product API Routes
// 1. post  /  products
//2. get  / products
//  3. get /  products/:id
// 4. put  /  products/:id

productApp.get('/products', async (req,  res) => {
    const products = await product.find({},{"username":1,"age":1,"-id":0});
    res.status(200).json({message: "products", payload: products});
})

productApp.post('/products' , async(req, res) => {let newproduct = req.body;
    //Create new product Document
    let newproductDoc = new product(newproduct);
    //save info
    await newproductDoc.save();

    res.status(201).json({message: "Product Created", payload: newproductDoc});
})


productApp.get('/products/:id',async (req, res) => {

    //. get ObjectID from url params
    let objId = req.params.id;
    //find   product byid
    let productObj = await product.findById(objId)
    // send res
    res.status(200).json({message: "product", payload: productObj})
})

//Update product
productApp.put('/products/:id', async (req, res) => {let objId = req.params.id;
    //get  modified 
    let modifiedproduct = req.body;
    // make update
    let found = await product.findByIdAndUpdate(objId, {$set:{...modifiedproduct}}, {new:true});
    res.status(200).json({message: "Product Updated", payload : found});
})

// User API Routes


// 1. get/ users 
//2. post / users (create user)
// 3. get /  users/:id 
//  4. put / users/:id (update user)

// 5. delete / users/:id

userApp.get('/users', async (req, res) => {
     const  users = await UserModel.find();
    res.status(200).json({message: "All Users", payload: users});
})

userApp.post('/users', async (req, res) => {
    let  newUser= req.body;
    //hash the password
    let hashedPassword = await hash(newUser.password,12);
    //replace plain password with hashed password
    newUser.password = hashedPassword;
    //  Create new user Document
    let newUserDoc= new UserModel(newUser);
    //save info
    await newUserDoc.save();

    res.status(201).json({message: "User Created", payload: newUserDoc});
})

userApp.post('/auth',async(req,res)=>{
    //get user credentials
    let userCred = req.body;
    //check for username
    let userOfDB = await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userOfDB === null){
        return res.status(404).json({message:"Invalid Username"});
    }
    //compare passwords
    let status = await compare(userCred.password, userOfDB.password);
    //if passwords not matched
    if(status===false){
        return res.status(404).json({message:"Invalid Password"});
    }
    //create signed token
    let signedToken = jwt.sign({username:userOfDB.username},'secret',{expiresIn:"10d"})
    //save the response as httpOnly cookie
    res.cookie('tokn',signedToken,{
        httpOnly:true,   //it is only http Cookie
        secure:false,
        sameSite:"lax" 
        //none accessible by any application
        //srict high restriction
        //lax accessible by moderate application

    })
    //send token in response
    res.status(200).json({message:"login success",token:signedToken});    

})

//test route


userApp.get('/users/:id',  async (req, res) => {
    
    //get Object ID from  url params
    let  objId= req.params.id;
    //find  user byid
    let userObj= await UserModel.findById(objId)
    // send res
    res.status(200).json({message: "user", payload: userObj})
})

//Update User
userApp.put('/users/:id'   ,async (req, res) => {
    let objId= req.params.id;
    
    //g  et modified 
    let  modifiedUser = req.body;
    //make update
    let updatedUser= await UserModel.findByIdAndUpdate(objId, {$set:{...modifiedUser}}, {new:true});
    res.status(200).json({message: "User Updated", payload : updatedUser});
})

//Delete User
userApp.delete("/users/:id", async (req, res) => {
    
    //get objId from url params
    let objId= req.params.id;
    //delete user by id 
    
    let  deleteUser= await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message: "User Removed", payload: deleteUser});
})
userApp.get("/test",verifyToken ,(req,res,next)=>{
    res.json({message:"test route"});
})