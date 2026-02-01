// Create HTTPS server
//Import express modele
import Express from 'express'
import mongoose from 'mongoose';

import { connect } from 'mongoose';

import { userApp} from './APIs/userAPI.js';
import { productApp} from './APIs/userAPI.js';
//Create Server
const app = Express();

app.use(Express.json())

//Database Connection
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017')
        console.log("DB Connected Success")

        //to use userApp for all routes starting with /user-api
        app.use('/user-api', userApp);
        //.  use productApp for all routes starting with /product-api
        app.use('/product-api', productApp);

        //Assign PORT number
        app.listen(4000, () => {
            console.log(`Running on port 4000`);
        })
    }catch(err) {
        console.log("Err in DB connection", err);
    }
}
connectDB();