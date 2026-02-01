//what is error
//what is issue with error
//how to handle error

let a=10;
console.log("a is :",a);

//try throws the error catch handles the error
//the error is handled by program itself if we use try catch blocks. 
//if the error is not handled then java engine handle it and terminate the program
//throw keyword is used to throw custom errors
try{
  console.log(x); //x is not defined
}catch(err){
  console.log("error caught :",err.name ,"||",err.message);
}finally{
  console.log("finally block always executes");
}

let b=20;
console.log("b is :",b);

console.log("end of program");