    //Create HTTP server
        //Import express module
        import exp, { json } from 'express';
        //create min- express(separate route) app
        export const userApp = exp.Router();
      
      //get req handling route(read user)
      let users = [];
      userApp.get('/users',(req,res)=>{
        //send res to client
        res.status(200).json({"message":"All Users", "payload": users});
      })
 
      //post req handling route(create user)
      userApp.post('/users',(req,res)=>{
        let newUser = req.body;
        users.push(newUser);
        res.status(201).json({"message":"User Created Successfully", "payload": newUser});
      })
      
      //put req handling route(update user)
      userApp.put('/users/:id',(req,res)=>{
        //send res to client
        //get modified user from req
        let modifiedUser = req.body;
        let userId = req.params.id;
        //find the user with id exists in users array
        let userFound = users.find((user)=> user.id == userId);
        //if user not found , send res as "User Not Found"
        if(!userFound){
          return res.status(404).json({"message":"User Not Found"});
        }
        //if user found, modify the user
        userFound.name = modifiedUser.name;
        userFound.age = modifiedUser.age;
        //send res as "User Updated Successfully"
        res.status(200).json({"message":"User Updated Successfully", "payload": userFound});
      })

      userApp.get('/users/:id',(req,res)=>{
        //send res to client
        // console.log(req.params);
        let userId = req.params.id; //{id :'200}
        //read id from url parameter
        let user = users.find((user)=> user.id == userId);
        if(!user){
          return res.status(404).json({"message":"User Not Found"});
        }
        //read user by this id
        res.status(200).json({"message":"User Found", "payload": user});
      })


      //delete req handling route(delete user)    
      userApp.delete('/users/:id',(req,res)=>{
        let userId = req.params.id;
        let userIndex = users.findIndex((user)=> user.id == userId);
        if(userIndex === -1){
          return res.status(404).json({"message":"User Not Found"});
        }
        users.splice(userIndex,1);
        res.status(200).json({"message":"User Deleted Successfully"});
      })