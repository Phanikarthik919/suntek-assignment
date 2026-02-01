//all primitive data types are immutable in JavaScript. 
// This means that once a primitive value is created, it cannot be changed. 
// However, you can create new values based on existing ones.
// and the new value is reffered with the same variable name.
// and the old value still exists in the memory until garbage collected.

//Mutable(all reference) data types: Objects, Arrays, Functions
//Immutable(primitive) data types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

let a=10
a=a+1
a=a * 10

emp = {
  eno : 101,
  name : 'phani'
}
//Accessing object properties
console.log(emp.eno)
//Adding new property to object(dynamic)
emp.city = 'hyd'
//updating existing property
emp.name = 'phani karthik'
//deleting existing property
delete emp.eno

console.log(emp)

//freezing the object to make it immutable
//after freezing the object, we cannot add, update or delete any property
//it also does not show any error, just fails silently
Object.freeze(emp)
emp.name = 'karthik' //this will not update the name property
emp.salary = 45000 //this will not add new property salary
delete emp.city //this will not delete the city property

console.log(emp)
console.log(Object.keys(emp))
console.log(Object.values(emp))