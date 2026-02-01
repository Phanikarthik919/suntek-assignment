//Ravi made a promise to kiran that he will take her to restaurant

let free = true;
//create promise(ravi)
let p = new Promise((fullfill,reject)=>{
  setTimeout(()=>{
    if(free === true){
      fullfill("let's go to restaurant");
    }else{
      reject("sorry, i'm busy now");
    }
  })
})
//consume promise(kiran)
p.then((message)=>console.log("Done",message))
 .catch((error)=>console.log("accept",error));