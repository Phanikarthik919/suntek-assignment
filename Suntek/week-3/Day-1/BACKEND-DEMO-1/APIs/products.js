//Create HTTP server
    //Import express module
    import e from 'express';
import exp, { json } from 'express';
    //create min- express(separate route) app
    export const productApp = exp.Router();


let products = [];

//get req handling route (read products)
productApp.get('/products',(req,res)=>{
  //send res to client
  res.status(200).json({"message":"All Products", "payload": products});
})
//get product by id
productApp.get('/products-id/:id',(req,res)=>{
  let productId = req.params.id; //{id :'200}
  //read id from url parameter
  let product = products.find((product)=> product.productid == productId);
  if(!product){
    return res.status(404).json({"message":"Product Not Found"});
  }
  //read product by this id
  res.status(200).json({"message":"Product Found", "payload": product});
})

//get products by brand
///products/brand/:brand is used because /products/:id will conflict when brand name is number
//why filter is used instead of find here?
//because multiple products can be there for same brand
productApp.get('/products-brand/:brand',(req,res)=>{
  let brandName = req.params.brand; //{brand :'Nike'}
  //read brand from url parameter
  let brandedProducts = products.filter((product)=> product.brand === brandName);
  if(brandedProducts.length === 0){
    return res.status(404).json({"message":"No Products Found for this Brand"});
  }
  //read products by this brand
  res.status(200).json({"message":"Products Found", "payload": brandedProducts});
})

//post req handling route (create product)
productApp.post('/products',(req,res)=>{
  let newProduct = req.body;
  products.push(newProduct);
  res.status(201).json({"message":"Product Created Successfully", "payload": newProduct});
})
//put req handling route (update product)
productApp.put('/products-id/:id',(req,res)=>{
  //send res to client
  //get modified product from req
  let modifiedProduct = req.body;
  let productId = req.params.id;
  //find the product with id exists in products array
  let productFound = products.find((product)=> product.productid == productId);
  //if product not found , send res as "Product Not Found"
  if(!productFound){
    return res.status(404).json({"message":"Product Not Found"});
  }
  //if product found, modify the product
  productFound.name = modifiedProduct.name;
  productFound.price = modifiedProduct.price;
  productFound.brand = modifiedProduct.brand;
  //send res as "Product Updated Successfully"
  res.status(200).json({"message":"Product Updated Successfully", "payload": productFound});
})
//delete req handling route (delete product)    
productApp.delete('/products-id/:id',(req,res)=>{
  let productId = req.params.id;
  let productIndex = products.findIndex((product)=> product.productid == productId);
  if(productIndex === -1){
    return res.status(404).json({"message":"Product Not Found"});
  }
  products.splice(productIndex,1);
  res.status(200).json({"message":"Product Deleted Successfully"});
})