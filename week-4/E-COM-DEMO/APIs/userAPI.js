import exp from 'express'
import { UserModel } from '../Models/UserModel.js'
import { ProductModel } from '../Models/ProductModel.js';
import {hash,compare} from 'bcryptjs'
export const userRoute = exp.Router();

userRoute.get('/users', async (req, res) => {
    // fetch all users from database
    const users = await UserModel.find()
    // send res to client
    res.status(200).json({ message: 'All users', payload: users })

})
//route to create new user
userRoute.post('/users', async (req, res, next) => {
  
    let  newUser= req.body;
    await new UserModel(newUser).validate();
    //hash the password
    let hashedPassword = await hash(newUser.password,12);
    //replace plain password with hashed password
    newUser.password = hashedPassword;
    //  Create new user Document
    let newUserDoc= new UserModel(newUser);
    //save info

    await newUserDoc.save({validateBeforeSave:false});

    res.status(201).json({message: "User Created", payload: newUserDoc});
  
})
// userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{


//   //read uid and pid from url parameters
//   let {uid,pid} = req.params;  //{uid:"", pid:""}
//   //check user
//   console.log("uid",uid)
//   console.log("pid",pid)
//   let user = await UserModel.findById(uid);
//   if(!user){
//     return res.status(401).json({message:"User not Found"})
//   }
//   //check product
//   let product = await ProductModel.findById(pid);
//   if(!product){
//     return res.status(401).json({message:"product not Found"})
//   }
//   //perform the update
//   let modifiedUser = await UserModel.findByIdAndUpdate(
//     uid,
//     {$push:{cart:{product:pid}}},
//     {new:true}
//   ).populate("cart.product")
//   //res
//   res.status(201).json({message:"cart Modified" , payload:modifiedUser});
// })

//read user by id

userRoute.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res, next) => {
  // read uid and pid from url parameters
  let {uid, pid } = req.params
  
  // check user
  let user= await UserModel.findById(uid)
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }
  
  // check if product already in cart
  let cartItem = user.cart.find(item => item.product.toString() === pid)
  
  if (cartItem) {
    // product exists, increment quantity
    cartItem.quantity += 1
  } else {
    // if product is not there then add with quantity 1
    user.cart.push({ product: pid, quantity: 1 })
  }
  
  await user.save()
  let modifiedUser = await UserModel.findById(uid).populate("cart.product", "productName price")
  
  res.status(200).json({ message: "cart modified", payload: modifiedUser })
})

userRoute.get("/users/:uid",async(req,res)=>{
  let {uid} = req.params;
  //find   product byid
  let userObj = await UserModel.findById(uid).populate("cart.product","productName price")
  // send res
  res.status(200).json({message: "user", payload: userObj})
})