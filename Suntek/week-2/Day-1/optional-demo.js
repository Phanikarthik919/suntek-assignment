//es6 vession of javascript gave these new features
//optional chaining and nullish coalescing operator

//optional chaining is used to access deeply nested properties of an object without having to check if each reference in the chain is valid
let student = {
  name: "phani",
  age: 24,
}

//accessing address property using optional chaining
console.log(student.name); //phani
console.log(student.age); //24
console.log(student.city); //undefined
console.log(student.city?.length??"City is not provided"); //undefined.length -> error