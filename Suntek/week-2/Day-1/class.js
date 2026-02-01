//create 100 person objects using class
class Person{
  //properties
  pid;
  age;
  //static variable and methods are those which can be accessed without creating object of class
  static collegeName = "anurag"

  //static method
  static {
    Person.collegeName;
  }
  //which method executes first static or constructor and why?
  //static method executes first because static members are loaded into memory at the time of class loading whereas constructor is called when an object is created.

  //constructor
  constructor(pid,age){
    this.pid = pid;
    this.age = age;
  }
  //methods
  getPersonData(){
    console.log(this.pid,this.age);
  }
}

//create objects of person class
let p1 = new Person(200,18);
let p2 = new Person(201,20);

//access static variable without creating object
console.log(Person.collegeName);

//methods are called on the objects
p1.getPersonData();
p2.getPersonData();