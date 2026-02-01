function priceTagLabler(price){
  if(price<500) return "Budget Course"
  else if(price>=500 && price<=1000) return "Standard Course"
  else return "Premium Course"
}
let price = 1299
result = priceTagLabler(price)
console.log("The Course Price is",price,"and it is labeled as",result)
