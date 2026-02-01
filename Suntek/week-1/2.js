//functions declaration
function BigOfThree(a,b,c){
  if(a<b && c<b){
    return b
  }else if(b<a && c<a){
    return a
  }else{
    return c
  }
}
//function calling

result = BigOfThree(10,11,12)
console.log("Biggest Num among 3 Numbers is",result)
console.log(typeof BigOfThree)
console.log("Let's Sleep")