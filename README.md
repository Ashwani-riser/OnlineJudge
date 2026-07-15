# 🚀 CodeForU - Production Ready Online Judge

A scalable, secure, and production-ready Online Judge platform inspired by Codeforces and LeetCode. It allows users to solve programming problems, participate in contests, execute code in multiple languages, and receive instant verdicts through a custom-built judge engine.

---

# ✨ Features

## 👤 Authentication & Authorization

- JWT Authentication
- Secure HttpOnly Cookies
- Email Verification
- Resend Verification Email
- Forgot Password
- Password Reset
- Role Based Access Control (Admin/User)
- Protected Routes
- Token Expiration
- Secure Password Hashing (bcrypt)

---

## 🔒 Security Features

- Helmet Security Headers
- Rate Limiting
- CORS Protection
- Environment Variables
- JWT Authentication
- Password Hashing (bcrypt)
- Secure Cookie Configuration
- Input Validation
- MongoDB Injection Protection
- XSS Protection
- Centralized Error Handling
- Production-ready API Structure

---

## 📧 Email Services

- Email Verification
- Welcome Email
- Forgot Password Email
- Password Reset Email
- Verification Token Expiry
- Secure SHA-256 Token Generation

---

## 📚 Problem Management

- Create Problems
- Update Problems
- Delete Problems
- Problem Slug Generation
- Difficulty Levels
- Tags
- Constraints
- Input Format
- Output Format
- Explanation
- Sample Test Cases
- Hidden Test Cases

---

## ⚡ Online Judge Engine

Custom Judge Engine built from scratch.

### Features

- Code Compilation
- Code Execution
- Hidden Test Case Evaluation
- Output Comparison
- Temporary File Management
- Automatic Cleanup
- Execution Time Measurement
- Compilation Error Detection
- Runtime Error Detection
- Wrong Answer Detection
- Accepted Detection

---

## 🌍 Multi-language Support

- C
- C++
- Java
- Python

---

## 💻 Code Editor

- Monaco Editor
- Syntax Highlighting
- Multiple Language Templates
- Custom Input
- Run Code
- Submit Solution
- Output Console
- Verdict Display
- Execution Time

---

## 🏆 Contest System

- Create Contest
- Register Contest
- Contest Timer
- Contest Problems
- Contest Status
- Live Leaderboard
- Contest Participants

---

## 📈 Leaderboard

Codeforces-style Leaderboard

- Rank
- Solved Problems
- Penalty
- Accepted Count
- Wrong Attempts
- Contest Rankings

---

## 👑 Admin Dashboard

Admins can

- Create Problems
- Edit Problems
- Delete Problems
- Add Hidden Test Cases
- Create Contests
- Manage Users
- Manage Contest Problems

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- Axios
- React Hook Form
- Zod
- Monaco Editor
- Framer Motion
- Sonner

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Nodemailer
- Cloudinary
- Multer
- Helmet
- Express Rate Limit
- Cookie Parser
- Swagger API
- Morgan Logger
- CORS

---

# ⚙️ Judge Engine Workflow

```
User Code
     │
     ▼
Compile Source
     │
     ▼
Compilation Success?
     │
 ┌───┴────┐
 │        │
No       Yes
 │        │
 ▼        ▼
Compilation Error
          │
          ▼
Run Program
          │
          ▼
Execute Hidden Test Cases
          │
          ▼
Compare Output
          │
          ▼
Generate Verdict
          │
          ▼
Store Submission
```

---

# 📦 REST APIs

### Authentication

- Register
- Login
- Logout
- Current User
- Verify Email
- Resend Verification
- Forgot Password
- Reset Password

### Problems

- Get Problems
- Get Problem
- Create Problem
- Update Problem
- Delete Problem

### Submissions

- Run Code
- Submit Code
- Submission History

### Contests

- Create Contest
- Join Contest
- Contest Details
- Contest Leaderboard

### Users

- Profile
- Dashboard

---

# 📁 Folder Structure

```
Online-Judge
│
├── frontend
│   ├── app
│   ├── components
│   ├── services
│   ├── store
│   ├── hooks
│   ├── schemas
│   ├── types
│   └── utils
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── judge
│   ├── utils
│   └── validators
│
└── README.md
```

---

# 🚀 Highlights

✅ Production Ready Architecture

✅ Secure Authentication

✅ Email Verification System

✅ Password Reset Flow

✅ Rate Limiting

✅ Helmet Security

✅ Swagger Documentation

✅ Multi-language Judge

✅ Custom Judge Engine

✅ Hidden Test Cases

✅ Contest Module

✅ Codeforces-style Leaderboard

✅ Monaco Code Editor

✅ Responsive UI

---

# 📈 Future Roadmap

- Docker Deployment
- Redis Queue
- WebSocket Live Contest
- AI Code Review
- Plagiarism Detection
- Virtual Contests
- Editorial System
- Discussion Forum
- Company Interview Sheets
- Problem Recommendation Engine
- Kubernetes Deployment
- CI/CD Pipeline

---

# 👨‍💻 Author

**Ashwani Kumar**

B.Tech Information Technology

Competitive Programmer | Full Stack Developer

---

⭐ If you found this project useful, don't forget to give it a Star!
