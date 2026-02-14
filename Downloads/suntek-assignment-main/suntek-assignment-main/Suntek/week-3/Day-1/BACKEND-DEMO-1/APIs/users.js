//Create HTTP server
import exp, { json } from 'express';

export const userApp = exp.Router();

let users = [];
userApp.get('/users', (req, res) => {
    res.status(200).json({"message": "All Users", "payload": users});
})

//post req handling route(create user)
userApp.post('/users', (req, res) => {
    let newUser = req.body;
        users.push(newUser);
        res.status(201).json({"message":"User Created Successfully", "payload": newUser});
      })
      
      //put req handling route(update user)
//put req handling route(update user)
userApp.put('/users/:id', (req, res) => {
    let modifiedUser = req.body;
    let  userId= req.params.id;
    let userFound= users.find((user) => user.id == userId);
    
    if (!userFound) {
        return res.status(404).json({"message": "User Not Found"});
    }
    
    userFound.name= modifiedUser.name;
    userFound.age= modifiedUser.age;
    res.status(200).json({"message": "User Updated Successfully", "payload": userFound});
})

//get user by id
userApp.get('/users/:id', (req, res) => {
    let  userId= req.params.id;
    let user= users.find((user) => user.id == userId);
    
    if (!user) {
        return res.status(404).json({"message": "User Not Found"});
    }
    
    res.status(200).json({"message": "User Found", "payload": user});
})

//delete user
userApp.delete('/users/:id', (req, res) => {
    let userId = req.params.id;
    let userIndex = users.findIndex((user) => user.id == userId);
    
    if (userIndex === -1) {
        return res.status(404).json({"message": "User Not Found"});
    }
    
    users.splice(userIndex, 1);
    res.status(200).json({"message": "User Deleted Successfully"});
})