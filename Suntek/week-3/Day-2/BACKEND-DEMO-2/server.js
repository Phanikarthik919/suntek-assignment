// Create HTTPS server
import Express from 'express'
import mongoose from 'mongoose';
import { connect } from 'mongoose';
import { userApp, productApp } from './APIs/userAPI.js';

const app = Express();
app.use(Express.json())

//Database Connection
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017')
        console.log("DB Connected Success")
            //routes
        app.use('/user-api', userApp);
        app.use('/product-api', productApp);

        app.listen(4000, () => {
            console.log(`Running on port 4000`);
        })
    }catch(err) {
        console.log("Err in DB connection", err);
    }
}
connectDB();