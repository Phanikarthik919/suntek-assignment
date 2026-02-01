//functions declaration
function Bill(totalamount){
  totalamount += 500
  totalamount += 1200
  totalamount -= 200
  totalamount += (totalamount*18)/100
  return totalamount
}
//function calling
let totalamount = 0;
result = Bill(totalamount)
console.log("Final Bill Amount is",result)
console.log(typeof Bill)