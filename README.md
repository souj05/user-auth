# UserAuth

Full-stack authentication app built with React, TypeScript, Node.js, Express, MongoDB and JWT.

## Features

Register, login, logout, and protected routes. Passwords are hashed with bcrypt. Sessions persist across reloads using JWT.

## Environment

Create a `.env` file in the `backend` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

## Development server

Run `npm run dev` in the `backend` folder. The API starts on `http://localhost:5000`.

In a second terminal, run `npm start` in the `frontend` folder. Navigate to `http://localhost:3000/`. The app reloads automatically when you change any source files.

Both servers need to be running at the same time.

## Install

Run `npm install` in the `backend` folder.

Run `npm install --legacy-peer-deps` in the `frontend` folder. The flag is required — `react-scripts@5.0.1` has peer dependency conflicts that fail the install without it.

## Build

Run `npm run build` in the `frontend` folder. Build artifacts are stored in the `build/` directory.
