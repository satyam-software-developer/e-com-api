# 🛒 E-Com API (Node.js)

A **full-featured E‑Commerce REST API** built using **Node.js, Express, MongoDB, and Mongoose**. This project demonstrates real‑world backend concepts such as authentication, authorization, transactions, aggregation pipelines, file uploads, logging, and API documentation with Swagger.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication
  - Password hashing with bcrypt
  - Protected routes using middleware

- 👤 **User Management**
  - User signup & signin
  - Password reset (JWT protected)

- 📦 **Product Management**
  - Add products with image upload
  - Fetch all products
  - Filter products by price & category
  - Rate products
  - Average product price per category (Aggregation)

- 🛍️ **Cart Management**
  - Add items to cart
  - View cart items
  - Remove items from cart

- ❤️ **Like System**
  - Like Products or Categories
  - Fetch likes with populated user & item

- 📑 **Order Management**
  - Place orders using MongoDB transactions
  - Stock reduction after order placement
  - Cart auto-clear after order

- 📄 **API Documentation**
  - Swagger UI available at `/api-docs`

- 🧾 **Logging**
  - Request logging using file system

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (Native Driver + Mongoose)
- **JWT (jsonwebtoken)**
- **bcrypt**
- **Multer** (File uploads)
- **Swagger UI**

---

## 📂 Project Structure

```
e-com-api/
│
├── src/
│   ├── config/
│   │   ├── mongodb.js
│   │   └── mongooseConfig.js
│   │
│   ├── features/
│   │   ├── user/
│   │   ├── product/
│   │   ├── cartItems/
│   │   ├── order/
│   │   └── like/
│   │
│   ├── middlewares/
│   │   ├── jwt.middleware.js
│   │   ├── logger.middleware.js
│   │   └── fileupload.middleware.js
│   │
│   └── error-handler/
│       └── applicationError.js
│
├── uploads/
├── swagger.json
├── server.js
├── .env
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
DB_URL=mongodb://localhost:27017/ecomdb
JWT_SECRET=your_jwt_secret
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/e-com-api.git
cd e-com-api
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start the server

```
npm start
```

Server will start at:

```
http://localhost:3200
```

---

## 🔐 Authentication Flow

1. **Signup** → `/api/users/signup`
2. **Signin** → `/api/users/signin`
3. Receive **JWT Token**
4. Pass token in headers:

```
Authorization: <JWT_TOKEN>
```

---

## 📘 API Documentation

Swagger UI is available at:

```
http://localhost:3200/api-docs
```

Use the **Authorize 🔐** button to add JWT token.

---

## 🧪 Sample API Endpoints

### 🔹 Products

- `GET /api/products`
- `POST /api/products` (Protected)
- `POST /api/products/rate` (Protected)
- `GET /api/products/filter`
- `GET /api/products/averagePrice`

### 🔹 Users

- `POST /api/users/signup`
- `POST /api/users/signin`
- `PUT /api/users/resetPassword` (Protected)

### 🔹 Cart

- `POST /api/cartItems`
- `GET /api/cartItems`
- `DELETE /api/cartItems/:id`

### 🔹 Orders

- `POST /api/orders` (Protected)

### 🔹 Likes

- `POST /api/likes`
- `GET /api/likes`

---

## 🛡️ Error Handling

- Centralized error handling middleware
- Custom `ApplicationError` class
- Mongoose validation error support

---

## 🧠 Learning Outcomes

This project demonstrates:

- REST API design
- MongoDB Aggregation Pipelines
- Transactions with MongoDB Sessions
- JWT Authentication
- Clean architecture & modular code
- Swagger API documentation

---

## 👨‍💻 Author

**Satyam Kumar**
Full Stack Software Engineer

---

## ⭐ Support

If you like this project, don’t forget to **star ⭐ the repository** and share it!

Happy Coding 🚀
