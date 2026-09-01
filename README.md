🍽️ Food Delivery Web App

A full-stack MERN-based food ordering platform with authentication, cart system, order management, and Stripe-powered payments.

🚀 Features

---Frontend---
Built with React + Vite
User authentication (login / signup)
Browse food menu
Add / remove items from cart
Checkout using Stripe
Payment verification page
Order tracking

---Backend---
Express.js REST API
MongoDB Atlas database
JWT authentication
Add / remove cart items
Place orders
Stripe Checkout integration
Order verification system
Secure routes using middleware

🛠️ Tech Stack

---Frontend---
React
Vite
React Router
Axios
CSS Modules

---Backend---
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Stripe Payments


📁 Folder Structure

food-delivery-website/
│
├── admin/                # Admin dashboard (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── backend/              # Backend API (Node.js + Express + MongoDB)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/          # Food image storage
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/             # User-facing frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md             # Project documentation


----**HOW TO RUN**----


create a .env file and add the following things in it->
MONGODB_URI="mongodb+srv://your-user:your-password@cluster.mongodb.net/food-del"
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="add_your_own_stripe_secret_key"
FRONTEND_URL="https://your-frontend-domain.vercel.app"



in frontend-> npm run dev
in admin-> npm run dev
in backend-> add stripe secret key in .env file and then run=> npm run server. 
