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
// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
const publishedCourses = courses.filter(course => course.published);
console.log("Published Courses:", publishedCourses);

//   -> Sort courses by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
//   -> Extract { title, price } only
const courseSummaries = courses.map(course => ({ title: course.title, price: course.price }));
console.log("Course Summaries:", courseSummaries);
//   -> Calculate total value of published courses
const totalPublishedValue = publishedCourses.reduce((total, course) => total + course.price, 0);
//   -> Add a new course immutably
const addCourse = (newCourse) => {
  return [...courses, newCourse];
};
const newCourse = { id: 104, title: "Python", price: 1199, published: true };
const updatedCourses = addCourse(newCourse);
console.log("Courses after addition:", updatedCourses);