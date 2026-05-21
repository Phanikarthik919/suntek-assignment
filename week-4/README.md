# Week 4: E-Commerce API with MongoDB

This week covers connecting the Express backend to a MongoDB database using Mongoose, creating schemas, and implementing a full CRUD REST API.

## Topics Covered
- **Database Integration**: Connecting to MongoDB Atlas.
- **Mongoose Schemas**: Defining strict data structures for MongoDB.
- **CRUD Operations**: Interacting with the database via models.
- **Password Hashing**: Securing user passwords with bcrypt.

## Key Functions & Methods Used

### 1. `mongoose.connect()`
- **What it does**: Opens a connection to the MongoDB database.
- **Usage**: Used in `server.js` to establish the database connection string using environment variables.

### 2. `mongoose.Schema()` and `mongoose.model()`
- **What it does**: `Schema` defines the shape of the documents, and `model` compiles the schema into a constructor for creating and reading documents.
- **Usage**: Used to enforce structure (e.g., making an email field required and unique).

### 3. `Model.find()` and `Model.findOne()`
- **What it does**: Queries the database for documents matching specific criteria.
- **Usage**: `find()` retrieves all matching records (like all products), while `findOne()` retrieves a single matching record (like a user by email).

### 4. `Model.create()`
- **What it does**: A shortcut for creating a new document and saving it to the database.
- **Usage**: Used to register a new user or add a new product.

### 5. `bcrypt.hash()` and `bcrypt.compare()`
- **What it does**: `hash()` converts a plain-text password into a secure hash, and `compare()` verifies a password against the hash.
- **Usage**: Crucial for security during user registration and login.
