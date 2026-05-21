let a=100;

//default export
//only one default export is allowed per module
//export keyword is used to export variables,functions and classes from a module
export default a;

//named export
//multiple named exports are allowed per module
//at the time of exporting named export we need to use same name 
let marks = [90,98];
let address={
  city:"hyd",
  pincode:500081
}

export {b,marks,address};