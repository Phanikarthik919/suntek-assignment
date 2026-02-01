// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
//     1. Create a shallow copy of user
              const copiedUser = Object.assign({}, user);
//     2. Change:
//           i. name in the copied object
              copiedUser.name = "Raj";  

//           ii. preferences.theme in the copied object
              copiedUser.preferences.theme = "light";
//           iii .Log both original and copied objects
              console.log("Original User:", user);
              console.log("Copied User:", copiedUser);
//     3. Analyze:

//           iv. Observe what changes and what doesn’t
//               - Changing name in copied object does not affect original object
console.log("After changing name:");
console.log("Original User Name:", user.name); 
console.log("Copied User Name:", copiedUser.name);




