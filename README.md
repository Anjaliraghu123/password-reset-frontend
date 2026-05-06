# Getting Started with Create React App


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#  Password Reset Backend API

A secure authentication backend built using **Node.js, Express, and MongoDB**.
It supports user registration, login, and password reset using token-based authentication.

---

## 🌐 render Live API

```
https://password-reset-backend-gt25.onrender.com
```

---

##  Features

* ✅ User Registration
* ✅ User Login (JWT Token)
* ✅ Forgot Password (Reset Token Generation)
* ✅ Reset Password (Token + Expiry Validation)
* ✅ Password Hashing (bcrypt)
* ✅ MongoDB Database

---



### 1️⃣ Register

**POST** `/api/auth/register`

```json
{
  "name": "Anjali",
  "email": "anjali@gmail.com",
  "password": "123456"
}
```

---

### 2️⃣ Login

**POST** `/api/auth/login`


```

---

###  Forgot Password

**POST** `/api/auth/forgot-password`

```json
{
  "email": "anjali@gmail.com"
}
```
 Generates reset token (shown in console in development)

---

### 4️ Reset Password

**POST** `/api/auth/reset-password/:token`
`

---

##  How It Works (Flow)

1. User registers with name, email, password
2. User logs in and receives JWT token
3. User clicks "Forgot Password"
4. Server generates reset token
5. User opens reset link
6. User enters new password
7. Password updated successfully

---

##  Environment Variables

Create `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
PORT=5000
```

---

##  Installation

```bash
npm install
npm run dev
```

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcryptjs
* crypto

---

##  Security

* Passwords are hashed using bcrypt
* JWT used for authentication
* Reset token is hashed
* Token expires in 15 minutes

---

##  Author

Anjali Raghu

---

##  Future Improvements

* Email sending using Nodemailer
* Refresh tokens
* Role-based authentication
* React frontend integration

---
 Backend repo  https://github.com/Anjaliraghu123/password-reset-backend.git


  
Build your project
npm run build

 This creates a build folder
