// Project story:
// -------------
// “We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

// Data setup:
// -----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users

const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);
//   -> Extract names of active users
const activeUserNames = activeUsers.map(user => user.name);
console.log("Active User Names:", activeUserNames);
//   -> Check if any admin exists
const hasAdmin = users.some(user => user.role === "admin");
console.log("Is there any admin?", hasAdmin);
//   -> Find user by id
const userIdToFind = 2;
const foundUser = users.find(user => user.id === userIdToFind);
console.log("Found User:", foundUser);
//   -> Deactivate a user immutably
const deactivateUser = (userId) => {
  return users.map(user => 
    user.id === userId ? { ...user, active: false } : user
  );
};
const updatedUsers = deactivateUser(1);
console.log("Users after deactivation:", updatedUsers);