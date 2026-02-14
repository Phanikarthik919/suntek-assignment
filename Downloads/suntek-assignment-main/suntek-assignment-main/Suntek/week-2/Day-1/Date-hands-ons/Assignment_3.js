// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years
let dob = new Date("2000-05-15");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
let month = today.getMonth() - dob.getMonth();
console.log(age , month);