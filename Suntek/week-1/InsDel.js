
//unpacking array(destucturing)
let marks = [10,20,30]
let [p,q,r] = marks;
console.log(p)

//Insert

//at start
marks.unshift(0)
console.log(marks)
//at end
marks.push(40,50)
console.log(marks)
//in between
//splice(index,delete count , elements)
marks.splice(1,0,45)
console.log(marks)

//Delete

//at start
marks.shift()
console.log(marks)
//at end
marks.pop()
console.log(marks)
//in between
marks.splice(1,2,45)
console.log(marks)