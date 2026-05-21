// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");
let dline = new Date("2026-01-22");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"
let today = new Date();
console.log("Current date and time:",today.toString());
if(today < dline){
  console.log("Enrollment Open");
}else{
  console.log("Enrollment Closed");
}

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
let daysineachmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
let date = new Date("2026-03-30");
let year = date.getFullYear();
console.log(date.getMonth());
let month = date.getMonth();
let day = date.getDate();

console.log(day,month,year);

if(month == 2){
  if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    daysineachmonth[1] = 29;
  }
}

if(day > daysineachmonth[month] && (month <0 || month > 12)){
  console.log("Invalid Date");
}else{
  console.log("Valid Date");
}