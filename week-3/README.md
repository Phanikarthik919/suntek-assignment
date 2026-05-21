# Week 3: Backend Fundamentals with Express.js

This week introduces server-side development using Node.js and the Express framework, covering routing, middleware, and request handling.

## Topics Covered
- **Express.js Setup**: Initializing a web server.
- **Routing**: Handling GET, POST, PUT, DELETE requests.
- **Middleware**: Intercepting requests for validation or logging.
- **API Testing**: Using tools like Postman or REST Client to test endpoints.

## Key Functions & Methods Used

### 1. `express()`
- **What it does**: Creates an instance of an Express application.
- **Usage**: The core foundation of the backend server.

### 2. `app.use()`
- **What it does**: Mounts middleware functions at a specific path.
- **Usage**: Used for parsing JSON (`express.json()`), handling CORS, or setting up modular routers.

### 3. `app.get()`, `app.post()`, `app.put()`, `app.delete()`
- **What it does**: Defines route handlers for specific HTTP methods.
- **Usage**: Creates endpoints for retrieving, creating, updating, and deleting data.

### 4. `req.body` and `req.params`
- **What it does**: `req.body` contains data submitted in the request body (e.g., POST/PUT). `req.params` contains route parameters (e.g., the ID in `/users/:id`).
- **Usage**: Used to extract data sent by the client.

### 5. `res.send()` and `res.json()`
- **What it does**: Sends an HTTP response back to the client.
- **Usage**: `res.json()` is specifically used to send a JSON response, which is standard for RESTful APIs.
