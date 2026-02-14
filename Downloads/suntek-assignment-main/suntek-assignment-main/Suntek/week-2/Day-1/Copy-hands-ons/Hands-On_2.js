// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
//       1. Create a deep copy of order
                const deepCopiedOrder = JSON.parse(JSON.stringify(order));  
//       2. Modify in copied object:
//             i. customer.address.city
                deepCopiedOrder.customer.address.city = "Bangalore";
//             ii. items[0].price
                deepCopiedOrder.items[0].price = 80000;
//             iii. Verify original object remains unchanged
                console.log("Original Order:", order);
                console.log("Deep Copied Order:", deepCopiedOrder);