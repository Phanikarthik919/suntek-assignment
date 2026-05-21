# Week 5: Blog Application Backend

This week focuses on building a robust backend for a Blog application, introducing authentication, authorization, and relationship mapping between documents.

## Topics Covered
- **JWT Authentication**: Securing API endpoints with JSON Web Tokens.
- **Middleware Authorization**: Verifying tokens before allowing access to routes.
- **Document Relationships**: Linking Users to their Articles.
- **Advanced Mongoose**: Using `populate()` to resolve references.

## Key Functions & Methods Used

### 1. `jwt.sign()`
- **What it does**: Generates a secure JSON Web Token containing a payload (like a user ID).
- **Usage**: Used during the login process to issue an access token to the client.

### 2. `jwt.verify()`
- **What it does**: Validates a JSON Web Token to ensure it hasn't been tampered with or expired.
- **Usage**: Used in authorization middleware to protect private routes.

### 3. `next()`
- **What it does**: A callback function in Express that passes control to the next middleware function.
- **Usage**: Used in custom middleware (like error handlers or auth guards) to continue the request lifecycle.

### 4. `populate()` (Mongoose)
- **What it does**: Replaces specified paths in a document with document(s) from other collections.
- **Usage**: Used to fetch an article and automatically load the author's details (name, email) instead of just returning the author's ID.

### 5. `try...catch` Blocks
- **What it does**: Handles asynchronous errors gracefully.
- **Usage**: Wrapped around database calls to catch and forward errors to the global error-handling middleware.
