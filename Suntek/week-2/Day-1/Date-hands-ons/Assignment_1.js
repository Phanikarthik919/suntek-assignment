// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
let d1 = new Date();
console.log("Current date and time:",d1.toString());
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date 
//                     * Day of week
//                     * Hours, minutes, seconds
let year = d1.getFullYear();
let month = d1.getMonth()+1;
let date = d1.getDate();
let day = d1.getDay();
let hours = d1.getHours();
let minutes = d1.getMinutes();
let seconds = d1.getSeconds();

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("year",year)
console.log("month",months[month-1])
console.log("date",date)
console.log("day of week",day)
console.log("hours",hours,
            "minutes",minutes,
            "seconds",seconds)
//                     * Note: Month is 0 based, Day of week starts from Sunday(0)
//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
console.log()
console.log(`${date } - ${ month} - ${year} ${hours} : ${minutes} : ${seconds}`);