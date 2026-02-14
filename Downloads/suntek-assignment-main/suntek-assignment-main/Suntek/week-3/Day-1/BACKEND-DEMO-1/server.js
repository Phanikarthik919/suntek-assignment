//Create HTTP server
    //Import express module
    import exp, {json } from 'express';
    //Create Server
    const app= exp()
    //app is an object which contains methods to create server and to listen requests from client
    
    app.use(json());
    //import userApp
    import { userApp  } from './APIs/users.js';
    import {productApp } from './APIs/products.js';
    
    //Assign Port Number
    app.listen(3000,()=>{
        console.log("HtTPServer is  Listening on port 3000..");
    }) 



    //to use userApp for all routes starting with /user
     app.use('/user-api',userApp);
    //to use productApp for all routes starting with /product
    app.use('/product-api',   productApp);


