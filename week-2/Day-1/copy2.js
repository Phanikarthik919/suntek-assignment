//Nested objects and arrays are not deeply copied using Object.assign() or spread operator

let student1= {
  collageName:"anurag",
  rollno:101,
  marks:[90,98,95],
  address:{
    city:"hyd",
    pincode:500081
  }
}

let student2 = {...student1}; //shallow copy using spread operator

student2.rollno = 102; //modifying primitive type
student2.marks[0] = 100; //modifying nested array
student2.address.city = "banglore"; //modifying nested object

console.log("student1:",student1);
console.log("student2:",student2);
//changes made to nested array and object in student2 are reflected in student1 also
//because only shallow copy is created using spread operator nested objects are  changed
//spread operator creates only top level properties copy for bottom level nested objects and arrays
//it creates copy of reference only
//to create deep copy we can use structuredClone() method
let student3 = structuredClone(student1); //deep copy
