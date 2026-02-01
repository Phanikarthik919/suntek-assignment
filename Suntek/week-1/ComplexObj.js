let Student={
  sno:100,
  name:"phani",
  marks:[90,85,88],
  address:{
    city:"hyd",
    state:"telangana",
    country:"india"
  },
  getData:function(){
    return Student.marks[0]
  },
  getAverage:function(){
    let total=0
    for(let i=0;i<Student.marks.length;i++){
      total+=Student.marks[i]
    }
    return total/Student.marks.length
  }
}

console.log(Student.sno)
console.log(Student.address.city)
console.log(Student.getData())
console.log(Student.getAverage())