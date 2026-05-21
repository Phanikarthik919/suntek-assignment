# User Management App

A full-stack MERN application for managing users with a modern, responsive UI and professional backend architecture.

## Live Demo
- **Frontend App**: [https://suntek-assignment-5ejm.vercel.app](https://suntek-assignment-5ejm.vercel.app)
- **Backend API**: [https://suntek-assignment-alpha.vercel.app](https://suntek-assignment-alpha.vercel.app)

## Features

**User Management**
- Create new users with validation
- View all users in a professional table
- Delete users with confirmation
- Real-time state management

**Professional UI**
- Beautiful gradient design with Tailwind CSS
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Intuitive navigation

**Robust Backend**
- RESTful API with proper error handling
- MongoDB database with validation
- CORS enabled for production
- Environment variable configuration

**Easy Deployment**
- One-click deployment to Vercel
- MongoDB Atlas integration
- Production-ready configuration

---

## Project Structure

```
User-Management-App/
├── backend/
│   ├── APIs/
│   │   └── UserApi.js          # User API routes
│   ├── models/
│   │   └── UserModel.js         # MongoDB schema
│   ├── server.js                # Express server
│   ├── vercel.json              # Vercel config
│   ├── .env.example             # Environment template
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Navigation
│   │   │   ├── Footer.jsx       # Footer
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── AddUser.jsx      # Create user form
│   │   │   ├── UserList.jsx     # Display users
│   │   │   └── RootLayout.jsx   # Main layout
│   │   ├── context/
│   │   │   └── UserContext.jsx  # State management
│   │   ├── App.css              # Global styles
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Tailwind CSS
│   ├── vercel.json              # Vercel config
│   ├── .env.example             # Environment template
│   └── package.json
│
├── DEPLOYMENT_GUIDE.md          # Detailed deployment guide
├── QUICK_DEPLOYMENT_GUIDE.md    # Quick start guide
└── README.md                    # This file
```

---

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router 7** - Navigation
- **React Hook Form** - Form management
- **Tailwind CSS 4** - Styling
- **Context API** - State management

### Backend
- **Node.js** - Runtime
- **Express 5** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM/validation
- **CORS** - Cross-origin handling
- **dotenv** - Environment variables

### Deployment
- **Vercel** - Hosting platform
- **MongoDB Atlas** - Cloud database
- **GitHub** - Version control

---

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- MongoDB Atlas account (free tier available)
- Vercel account (free tier available)

---

## Getting Started Locally

### 1. Clone & Install

```bash
# Clone the repository
git clone <repository-url>
cd User-Management-App

# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```

### 2. Configure Environment Variables

**Backend (.env):**
```
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/user-management
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Frontend (.env.local):**
```
VITE_API_URL=http://localhost:4000
```

### 3. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server runs on http://localhost:4000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

### 4. Access the App

Open browser: `http://localhost:5173`

---

## API Endpoints

### Base URL (Local)
```
http://localhost:4000/user-api
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users` | Create new user |
| GET | `/users` | Get all active users |
| GET | `/users/:id` | Get single user |
| PUT | `/users/:id` | Update user details |
| DELETE | `/users/:id` | Soft delete user |
| PATCH | `/users/:id` | Toggle user status |

### Example Request

```javascript
// Create User
fetch('http://localhost:4000/user-api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    mobileNumber: 9876543210,
    dateOfBirth: '2000-01-15'
  })
})
```

---

## Database Schema

### User Model

```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  mobileNumber: Number (required, unique),
  dateOfBirth: Date (required),
  status: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

---

## Component Hierarchy

```
RootLayout
├── Header
│   └── Navigation Links
├── Main Content (Outlet)
│   ├── Home (/)
│   ├── AddUser (/add-user)
│   └── UserList (/users)
└── Footer
```

---

## State Management

Uses **React Context API** (`UserContext`) for:
- User data management
- Loading states
- Error handling
- Success messages
- CRUD operations

Access anywhere with: `const { users, loading, error } = useUsers()`

---

## Deployment on Vercel

### Quick Start (5 minutes)

See **QUICK_DEPLOYMENT_GUIDE.md** for complete instructions.

**Summary:**
1. Push code to GitHub
2. Deploy backend on Vercel
3. Deploy frontend on Vercel
4. Configure environment variables
5. Done!

### Detailed Guide

See **DEPLOYMENT_GUIDE.md** for comprehensive deployment information.

---

## Available Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests
```

### Frontend
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Features Explained

### User Management
- **Add User**: Form validation with React Hook Form
- **View Users**: Responsive table with all user data
- **Delete User**: Soft delete (marks status as false)
- **Real-time Feedback**: Success/error messages

### State Management
- Centralized state in Context API
- Automatic loading indicators
- Error boundary and handlers
- Message auto-dismiss

### UI/UX
- Gradient backgrounds
- Smooth animations
- Hover effects
- Form validation feedback
- Loading states
- Empty states

---

## Security Considerations

- Input validation on frontend
- Schema validation on backend
- CORS configured for specific origins
- MongoDB injection prevention via Mongoose
- XSS protection via React
- Note: Add authentication/authorization for production

---

## Future Enhancements

- [ ] User authentication & authorization
- [ ] Edit user details (PUT endpoint)
- [ ] Search & filter users
- [ ] Pagination
- [ ] Export users to CSV
- [ ] User profile pictures
- [ ] Activity logs
- [ ] Bulk delete users
- [ ] Advanced filtering
- [ ] User roles & permissions

---

## Troubleshooting

### Cannot connect to backend
- Ensure backend is running on `http://localhost:4000`
- Check `VITE_API_URL` in frontend `.env.local`
- Verify CORS configuration in backend

### MongoDB connection error
- Verify connection string in `.env`
- Check IP whitelist in MongoDB Atlas
- Ensure database credentials are correct

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node version: `node -v` (should be 18+)

---

## Support

For issues or questions:
1. Check error messages in console
2. Review API response in Network tab
3. Check logs in Vercel dashboard (for production)
4. Verify environment variables

---

## License

ISC License - Feel free to use this project!

---

## Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Atlas Docs](https://docs.mongodb.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

## Credits

Built using modern web technologies

**Happy Coding!**
