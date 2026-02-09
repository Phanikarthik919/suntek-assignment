//Assignment 3: Student Marks List
//--------------------------------
//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
//    1. filter() marks ≥ 40 (pass marks)
let r1 = marks.filter((mark)=>mark>=40)
console.log(r1)

//    2. map() to add 5 grace marks to each student
let r2 = marks.map((mark)=>mark+5)
console.log(r2)

//    3. reduce() to find highest mark
let r3 = marks.reduce((high,mark)=>(mark>high)?mark:high,0)
console.log(r3)

//    4. find() first mark below 40
let r4 = marks.find((mark)=>mark<40)
console.log(r4)

//    5. findIndex() of mark 92
let r5 = marks.findIndex((mark)=>mark==92)
console.log(r5)
