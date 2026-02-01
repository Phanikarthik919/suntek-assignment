let emObj = {
  empNo:101,
  name:'phani',
  age:26
}
/*
console.log(emObj.empNo)
console.log(emObj.name)
console.log(emObj.age)
console.log(emObj)
console.log(emObj.city)
*/
for(let key in emObj){
  console.log(key ,"is",emObj[key])
}