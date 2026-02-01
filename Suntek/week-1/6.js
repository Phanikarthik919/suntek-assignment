let marks = [90,87,89,67,56]
let skills = ['html','javascript','angular']

console.log(marks[10])
let sum = 0
for(let i=0 ; i<marks.length ; i++){
  sum += marks[i]
}
console.log("sum is",sum)
//WAFunction that recievs marks array as argument and returns small element
function small(marks){
  let s = marks[0]
  for(let i=0 ; i<marks.length ; i++){
    if(marks[i] < s){
      s = marks[i];
    }
  }
  return s;
}
result = small(marks)
console.log("smallest num in array is : ",result)

