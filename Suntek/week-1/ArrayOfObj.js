//students(array of Objects)
let students = [
  {sno:1, name:'phani', age:20},
  {sno:2, name:'ram', age:18},
  {sno:3, name:'ravi', age:19},
  {sno:4, name:'raju', age:23}
]

//find students age less than 20
let r1 = students.filter((studentObj)=>studentObj.age<20)
console.log(r1)
//add age by 2 years for ram
let r2 = students.map((sudentObj)=>{
  if(sudentObj.name=='ram'){
    sudentObj.age += 2
  }
  return sudentObj
})
console.log(r2)

//find sum of ages of all students
let r3 = students.reduce((acc,studentObj)=>acc + studentObj.age,0)
console.log(r3)