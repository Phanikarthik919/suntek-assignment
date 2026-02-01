import Express from 'express'
import {product, UserModel } from '../Models/UserModel.js'
export const userApp = Express.Router();
export const productApp = Express.Router();

// Product API Routes
// 1. post  /  products
//2. get  / products
//  3. get /  products/:id
// 4. put  /  products/:id

productApp.get('/products', async (req,  res) => {
    const products = await product.find();
    res.status(200).json({message: "products", payload: products});
})

productApp.post('/products' , async(req, res) => {

    let newproduct = req.body;
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
productApp.put('/products/:id', async (req, res) => {
    let objId = req.params.id;
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
    const users = await UserModel.find();
    res.status(200).json({message: "All Users", payload: users});
})

userApp.post('/users', async (req, res) => {
    let newUser = req.body;
    //  Create new user Document
    let newUserDoc = new UserModel(newUser);
    //save info
    await newUserDoc.save();

    res.status(201).json({message: "User Created", payload: newUserDoc});
})


userApp.get('/users/:id',  async (req, res) => {

    //get Object ID from  url params
    let objId = req.params.id;
    //find  user byid
    let userObj = await UserModel.findById(objId)
    // send res
    res.status(200).json({message: "user", payload: userObj})
})

//Update User
userApp.put('/users/:id'   ,async (req, res) => {
    let objId = req.params.id;

    //g  et modified 
    let modifiedUser = req.body;
    //make update
    let updatedUser = await UserModel.findByIdAndUpdate(objId, {$set:{...modifiedUser}}, {new:true});
    res.status(200).json({message: "User Updated", payload : updatedUser});
})

//Delete User
userApp.delete("/users/:id", async (req, res) => {

    //get objId from url params
    let objId = req.params.id;
    //delete user by id 

    let deleteUser = await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message: "User Removed", payload: deleteUser});
})