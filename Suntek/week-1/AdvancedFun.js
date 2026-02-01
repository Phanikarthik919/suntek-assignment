//callback functions are functions passed as arguments to other functions
//it executes after some operation is completed
//Advanced functions are functions that take other functions as arguments or return functions as results
//Write  a Function that can extract marks greater than 70 . tag them into an array and return it

//using functions
let marks = [90,70,40,89,56]
let result = []
for(let i of marks){
  if(i > 70){
    result.push(i)
  }
}
console.log(result)
//using Advanced Functions
//-------------------------Filter-----------------------------
//============================================================
//filter method is only for selection
let result1 = marks.filter(function(element){
  return element > 70;
})
console.log(result1)

// one line code Using Arrow Function 
let result2 = marks.filter((element)=>element>70)
console.log(result2)

//Find all marks between 30 and 90
let result3 = marks.filter((element)=>(element>30 && element<90))
console.log(result3)

//-------------------------Map---------------------------------
//=============================================================

//map method is for modification / transformation
let salaries = [100,200,300]
let result4 = []
for(let i of salaries){
  result4.push(i+50)
}
console.log(result4)

//using Advanced Functions
let result5 = salaries.map(function(element){
  return element + 50
})
console.log(result5)

// one line code Using Arrow Function 
let result6 = salaries.map((element)=>element+50)
console.log(result6)
//------------------------Reduce-------------------------------
//=============================================================
//reduce method is for aggregation
//aggregation means combining all the elements to produce a single value
//find sum of marks
let result7 = marks.reduce((accumulator, element)=>accumulator + element)
console.log(result7)
//find samll element from the array
let small = marks.reduce((acc,ele)=>(acc<ele?acc:ele))
console.log(small)

let min = marks[0];
for(let i of marks){
  if(i < min){
    min = i;    
  }
}
console.log(min)
//------------------------find--------------------------------
//============================================================
//find method is for searching
//find 89
let result8 = marks.find((element)=>element==89)
console.log(result8)
//when find method returns undefined it means element not found
//-----------------------findIndex-------------------------------
//============================================================
//findIndex method is for searching the index of an element
//findIndex of 23
let result9 = marks.findIndex((element)=>element==23)
console.log(result9)
//when findIndex method returns -1 it means element not found
//findIndex of 89
let result10 = marks.findIndex((element)=>element==89)
console.log(result10)