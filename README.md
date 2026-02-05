# Hello & JSON CRUD Tasks

This repository contains two projects:

1. **Hello World Express Server** – A beginner-friendly Express.js server with routes, static files, and a development setup.  
2. **JSON REST API for Tasks** – A complete CRUD application for managing "tasks" using Express, including unit and integration tests.

---

## Task 1: Hello World Express Server

### Description
A basic Express server demonstrating routes, development environment setup, static file serving, and middleware usage.

### Features
- Start Express server (`node app` or `npm run dev` with nodemon)
- Routes:
  - `/hello` → Returns "Hello World" as plain text
  - `/api/hello` → Returns JSON `{ message: "Hello World!", date: <current date> }`
  - `/500` → Test route to trigger global error handler
- Logger using **Morgan**
- Error handling (404 and global error handler)
- Static files served from `public/`
- ESLint configured for code standards
- Unit tests with Mocha, Chai, and Supertest

### Installation & Running
```bash
npm install
npm run dev   # Start server in development mode
npm start     # Start server normally
npm test      # Run unit tests
