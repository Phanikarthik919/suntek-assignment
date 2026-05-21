# Week 2: Advanced JavaScript Concepts

This week focuses on Object-Oriented Programming (OOP) in JavaScript, working with collections, deep vs shallow copying, and handling dates.

## Topics Covered
- **Classes & Inheritance**: Building robust object structures.
- **Collections**: Using `Map` and `Set` for advanced data management.
- **Object Copying**: Understanding value vs reference and implementing shallow and deep copies.
- **Date Handling**: Managing and formatting dates.

## Key Functions & Methods Used

### 1. `class` & `constructor`
- **What it does**: `class` defines a blueprint for objects, and `constructor` is a special method called automatically when an object is instantiated.
- **Usage**: Used to define entities like `User`, `Product`, or `Cart` with encapsulated properties and methods.

### 2. `Map` and `Set`
- **What it does**: `Map` stores key-value pairs (where keys can be any data type), and `Set` stores unique values.
- **Usage**: Used for fast lookups or guaranteeing uniqueness (like unique tags or categories).

### 3. `Object.assign()` & Spread Syntax (`...`)
- **What it does**: Copies enumerable properties from one or more source objects to a target object. Creates a **shallow copy**.
- **Usage**: Used to merge objects or clone an object's top-level properties.

### 4. `JSON.parse(JSON.stringify(obj))`
- **What it does**: Converts an object to a JSON string and back to a new object, effectively creating a **deep copy**.
- **Usage**: Used to clone objects without retaining references to nested objects or arrays.

### 5. `Date` Methods (`getFullYear`, `getMonth`, `getDate`)
- **What it does**: Extracts specific parts of a Date object.
- **Usage**: Used to format dates, calculate age, or parse timestamps.
