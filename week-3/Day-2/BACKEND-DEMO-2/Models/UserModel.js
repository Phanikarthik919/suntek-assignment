import e from "express";
import { Schema,model } from "mongoose";

// ###Create Product api

// product obj schema : {pid,productName , price}
const productSchema = new Schema( {
  pid:{
    type:Number,
    required:[true,"pid is required"],
    minLength: [4,"Min length should be 3"]
  },
  productname:{
    type:String,

    required: [true,"productname is required"],
    minLength: [4,"Min length should be 4"],
    maxLength:[10,"Max length is  exceeded"]
  },
  Price:{
    type:String,
    required:[true,"Price is  required"]

  }

},{
  strict : "throw"
})
export const product = model("product", productSchema);

// 1. post /  products
//2. get /  products
// 3. get  /   products/<pid>
// 4. put /  products/<pid> 


//create user schema(username,  password , age)
const userSchema = new Schema({
    
  username:{
    type:String,
    required:[true,"Username is required"],
    minLength:  [4,"Min length should be 4"],
    maxLength:[6,"Max length is exceeded"]
  },
  password:{
    type:String,
    required:[true,"Password is required"]
  },
  age:{
    type:Number,

    required:[true,"Age is required"],
    min: [18,"Min age should be 18"],
    max:[25,"Max age should be 25"]
  }
},{
  strict:"throw",
  
});

//create user model with that schema
export const UserModel = model("users",userSchema);