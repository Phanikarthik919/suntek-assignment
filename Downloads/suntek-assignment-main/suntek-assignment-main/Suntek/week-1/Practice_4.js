//Assignment 2: Online Course Name Processor
//------------------------------------------
//Scenario : You are preparing a course list for display on a website.

//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

//Tasks:
//    1. filter() courses with name length > 5
let r1 = courses.filter((course)=>course.length>5)
console.log(r1)

//    2. map() to convert course names to uppercase
let r2 = courses.map((course)=>course.toUpperCase())
console.log(r2)

//    4. find() the course "react"
let r4 = courses.find((course)=>course=="react" )
console.log(r4)

//    5. findIndex() of "node"
let r5 = courses.findIndex((course)=>course=="node")
console.log(r5)


