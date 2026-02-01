//callback function is a function passed as an argument to another function
function test1(a){
  console.log(a)
  console.log(a())
}
//here anonymous function is passed as an argument
test1(function(){
  return 123;
})
//functions are called/invoked by application which is FunAsArg.js
