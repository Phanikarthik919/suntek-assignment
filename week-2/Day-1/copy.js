import a from "./module1";

let data = 100
let copyData = data; 
data = 200;
 //primitive types are copied by value
console.log("data:",data);
console.log("copyData:",copyData); //primitive types are copied by value

//non-primitive types (objects and arrays) are copied by reference
//copy of reference is only creted not the actual object/array
//both the variables are pointing to same object/array in the memory
//any changes made through one variable will be reflected in other variable

let copyObj = {
  a:10,
  b:20
}
let obj = copyObj; //copy of reference is created
obj.a = 100; //modifying obj
console.log("obj:",obj);
console.log("copyObj:",copyObj); //changes are reflected in copyObj also

//to create a copy of object/array we can use Object.assign() or spread operator
let copyObj2 = Object.assign({},copyObj); //creates a shallow copy of copyObj
let copyObj3 = {...copyObj}; //creates a shallow copy of copyObj