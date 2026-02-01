
let student = {
  "name": "pk",
  "age": 21,
  "courses": ["Math", "Science", "History"],
  "address": {
    "street": "123 Main St",
  }
};
console.log(student);
// Convert JavaScript object to JSON string
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

// Convert JSON string back to JavaScript object
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
