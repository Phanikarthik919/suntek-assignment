const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let total = 0;
for(let sub in marks){
  total += marks[sub]
}
console.log("Total Marks: " , total)
console.log("Average Marks:",total/Object.keys(marks).length)
let highest = 0;
for(let sub in marks){
  if(marks[sub]>highest){
    highest = marks[sub]
  }
}
console.log("Highest Marks:",highest)
marks.Computer = 90;
console.log(marks)
console.log(Object.keys(marks))
console.log(Object.values(marks))