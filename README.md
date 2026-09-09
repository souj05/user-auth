# User Authentication App

Full stack authentication system — React + TypeScript + Node.js + Express + MongoDB + JWT + Bootstrap

## Tech Stack
- **Frontend:** React 18, TypeScript, Bootstrap 5, React Router v6, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs

## Features
- Register with name, email, password
- Login with JWT token
- Protected dashboard (only accessible when logged in)
- Persistent login (token in localStorage)
- Bootstrap UI — clean, professional

## Setup

### Backend
```bash
cd backend
cp .env.example .env   # fill in MongoDB URI and JWT secret
npm install
npm run dev            # runs on http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm start              # runs on http://localhost:3000
```

## Project Structure
```
auth-app/
├── backend/
│   ├── src/
│   │   ├── controllers/auth.controller.js
│   │   ├── middleware/auth.middleware.js
│   │   ├── models/User.model.js
│   │   ├── routes/auth.routes.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/ProtectedRoute.tsx
    │   ├── context/AuthContext.tsx
    │   ├── pages/Login.tsx
    │   ├── pages/Register.tsx
    │   ├── pages/Dashboard.tsx
    │   ├── types/index.ts
    │   ├── App.tsx
    │   └── index.tsx
    └── package.json
```

Built by Sowjanya Tadimarri
