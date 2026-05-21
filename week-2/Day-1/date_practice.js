let d1 = new Date(2022,3,5);
let d2 = new Date(2024,0,1);

//find the difference
if(d1>d2){
  [d1,d2]=[d2,d1]; //swap
}

let years = d2.getFullYear() - d1.getFullYear();
let months = d2.getMonth() - d1.getMonth();
let days = d2.getDate() - d1.getDate();

if(months < 0){
  years--;
  months += 12;
}
if(days < 0){
  months--;
  //get no of days of previous month
  //
}
console.log("years:",years);
console.log("months:",months);
console.log("days:",days);