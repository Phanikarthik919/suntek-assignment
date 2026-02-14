//Date is a predefined object in JavaScript used to work with dates and times
let d1 = new Date();
//current date and time
console.log("Current date and time:",d1); //UTC(zulu) standard time zone is used
console.log(d1.toString()); //standard IST = UTC+5:30 format

console.log(Date.now());//timestamp in milliseconds since Jan 1,1970

//techniques to create date object
let date1 = new Date();
let date2 = new Date('2022-1-12');
let date3 = new Date(2022,0,12);
let date4 = new Date(Date.now());

let date5 = new Date(2022,0);
let date6 = new Date(2022,0,0);

console.log("date1:",date1.toString());
console.log("date2:",date2.toString());
console.log("date3:",date3.toString());
console.log("date4:",date4.toString());
console.log("date5:",date5.toString());
console.log("date6:",date6.toString());

//format of Date object
//YYYY-mm-dd T HH:mm:ss .sss Z
//yyyy - year
//mm - month(0-11)
//dd - date(1-31)
//T - separator between date and time
//HH - hours(00-23)
//mm - minutes(00-59)
//ss - seconds(00-59)
//sss - milliseconds(000-999)
//Z - time zone

//get Date components

//1. getFullYear()      //returns the year (4 digits)
//2. getMonth()         - month is zero based
//3. getDate()          //day of month
//4. getHours()         //hours of the day
//5. getMinutes()       //minutes of the hour
//6. getSeconds()       //seconds of the minute
//7. getMilliseconds()  //milliseconds of the second
//8. getDay() - day of week 0-6 (0-Sunday,1-Monday,...6-Saturday)

//set Date components

//1. setFullYear(year).  //sets the year (4 digits)
//2. setMonth(month)     - month is zero based
//3. setDate(date)       //sets the day of month
//4. setHours(hours)     //sets the hours of the day
//5. setMinutes(minutes)   //sets the minutes of the hour 
//6. setSeconds(seconds)
//7. setMilliseconds(milliseconds)
//8. no seeter for getDay()