//Ravi made a promise to lkiran that he will call in 10 minutes

let futureAvailability = false;

//create promise(ravi)
let promiseObj = new Promise((fullfill,reject)=>{
  setTimeout(() => {
    if(futureAvailability === true){
      fullfill("hello frnd... how are you ?");
    }else{
      reject("sorry... i will call you later");
    }
  }, 5000);
})
console.log(promiseObj);

//consume promise(kiran)
promiseObj.then((message)=>console.log("Fullfilled",message)) //then is called when promise is fullfilled
          .catch((error)=>console.log("Rejected",error));   //catch is called when promise is rejected

// //moderen way to consume promise using (async & await)
// async function consumePromise(){
//   let message = await promiseObj; //await is used to wait for the promise to be fullfilled
// }
console.log("Hello")