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

// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
const roleNames = Object.keys(roles);
console.log("Role Names:", roleNames);
//   -> Check if student can delete
const canStudentDelete = roles.student.includes("delete");
//   -> Create a flat list of all unique permissions
const allPermissions = Array.from(new Set(Object.values(roles).flat()));
//   -> Add new role moderator immutably
const addRole = (roleName, permissions) => {
  return { ...roles, [roleName]: permissions };
};
const updatedRoles = addRole("moderator", ["update", "view"]);
console.log("Roles after addition:", updatedRoles);