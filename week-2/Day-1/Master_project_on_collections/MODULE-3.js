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
// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
const mergedCart = cart.map(cartItem => {
  const course = courses.find(c => c.id === cartItem.courseId);
  return {
    ...cartItem,
    title: course.title,
    price: course.price,
    totalPrice: course.price * cartItem.qty
  };
});
console.log("Merged Cart:", mergedCart);
//   -> Calculate total cart amount
const totalCartAmount = mergedCart.reduce((total, item) => total + item.totalPrice, 0);
//   -> Increase quantity of a course (immutably)
const increaseQuantity = (courseId) => {
  return cart.map(item => 
    item.courseId === courseId ? { ...item, qty: item.qty + 1 } : item
  );
};
const updatedCart = increaseQuantity(101);
console.log("Cart after increasing quantity:", updatedCart);
//   -> Remove a course from cart
const removeCourse = (courseId) => {
  return cart.filter(item => item.courseId !== courseId);
};
//   -> Check if all cart items are paid courses
const allPaidCourses = cart.every(item => {
  const course = courses.find(c => c.id === item.courseId);
  return course && course.price > 0;
});
console.log("Are all cart items paid courses?", allPaidCourses);