//what is API
//API- Application Programming Interface
//it is a set of rules that allows different applications to communicate with each other
//APIs are used to enable the integration of different systems and applications, 
// allowing them to work together seamlessly.

//why is JSON used in API
// JSON stands for JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand
// and can be easily parsed by machines. 
// It is also a widely accepted format for data exchange between different systems and applications.

//Make API request
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(data=>console.log("Data Is : ",data))
// .catch(err=>console.log("error occured : ",err));

//modern syntax to consume promise using async & await
async function getData(){
  //make API request and get response
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //extract data from response
  let data = await res.json();
  console.log("Data using async await is : ",data);
}
getData();