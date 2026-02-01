let test={
  a:10,
  b:20,
  c:30
}
//unpacking object(destructuring)
let {x, y, z} = test //unpacking should use the same names as keys used in the object
console.log(x)
//console.log(b)
//console.log(c)
let {a, b, c} = test
console.log(a)
console.log(b)
console.log(c)
