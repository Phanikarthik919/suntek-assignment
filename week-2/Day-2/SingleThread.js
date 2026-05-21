//In javascript there is no multithreading concept. It is single threaded language. It means it can execute one command at a time.
//Even though we write multiple lines of code, javascript engine executes one line at a time in a sequential manner.
//This single threaded nature of javascript makes it easy to understand and debug the code as there are no concurrency issues.
//However, it also means that long running tasks can block the execution of other code, leading to performance issues in certain scenarios.
//To overcome this limitation, javascript provides asynchronous programming features like callbacks, promises, and async/await which allow non-blocking execution of code.
//Overall, the single threaded nature of javascript is a fundamental aspect of the language that developers need to understand in order to write efficient and effective code.

//synchronous means one task after another task is completed
//asynchronous means task can be started and while waiting for it to complete other tasks can be executed

console.log("person 1 ordered biryani");        //non-blocking synchronous
setTimeout(() => {
  console.log("person 2 got food");             //blocking asynchronous
}, 5000);
console.log("person 2 ordered curd rice");
setTimeout(() => {
  console.log("person 1 got food");             //blocking asynchronous
}, 3000); 
console.log("person 3 ordered water bottle");   //non-blocking synchronous  
setTimeout(() => {
  console.log("person 3 got water bottle");
}, 2000);                                       //blocking asynchronous

//In the above example, person 1,2,3 orders are non-blocking synchronous tasks,
//  while the food delivery for all three persons are blocking asynchronous tasks.
//  The food delivery tasks are scheduled to complete after a certain delay,
//  allowing other tasks to be executed in the meantime without blocking

//the execution of timeout function is blocing so ,
// it goes to web api and after completion it comes to callback queue and
// then event loop checks call stack 
// and if it is empty it pushes the timeout function to call stack for execution. 

//js engine has call stack and heap memory
//call stack is used to store function calls and execute them in LIFO order
//heap memory is used to store objects and variables

//when a function is called it is pushed to call stack
//when the function execution is completed it is popped from call stack

//1.syncronous blocking : if a task is blocking then next task has to wait for it to complete
//2.syncronous non-blocking : if a task is non-blocking then next task can be executed without waiting for it to complete
//3.asyncronous non-blocking : if a task is asyncronous and non-blocking then next task can be executed without waiting for it to complete
//4.asyncronous blocking : if a task is asyncronous and blocking then next task has to wait for it to complete