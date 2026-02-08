# 🛒 Product Management App (MERN Stack)

A simple Product CRUD application built using the MERN stack.
Users can add, view, edit, and delete products using a clean React UI connected to an Express + MongoDB backend.

This project focuses on correct frontend–backend state handling, especially distinguishing between insert vs update operations.

<h2>🚀 Features</h2>
Add new products
View all products in a table
Edit existing products
Delete products with confirmation (SweetAlert)
Toast notifications for user feedback
Single form used for both Add and Update
REST API–based architecture

<h2>🧠 Core Logic (Important)</h2>
The app uses a single form for both insert and update
When a user clicks Edit, the product data is loaded into the form
An internal editId state determines the operation:
editId === null → INSERT
editId !== null → UPDATE
This prevents accidental duplicate inserts during updates

<h2>🧱 Tech Stack</h2>
Frontend
React (Vite)
Axios
Tailwind CSS
React Toastify
SweetAlert2

Backend
Node.js
Express.js
MongoDB
Mongoose

<h2>📁 Project Structure</h2> 

```
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── products/
│   │   │   └── ProductList.jsx
│   │   ├── Product.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controller/
│   │   └── web/
│   │       └── productCtrl.js
│   ├── models/
│   │   └── schema.js
│   ├── routes/
│   │   └── web/
│   │       └── productRoutes.js
│   └── server.js
│
└── README.md

```

<h2>🔌 API Endpoints</h2>
Method	Endpoint	Description
POST	/web/api/insert	Add new product
GET	/web/api/show	Get all products
GET	/web/api/get/:id	Get single product
PUT	/web/api/update/:id	Update product
DELETE	/web/api/delete/:id	Delete product

<h2>🖥️ Frontend Flow</h2>
Page loads → fetches all products
User fills form → clicks Save
Product is inserted via POST
User clicks Edit → form is populated
User modifies data → clicks Update Product
Product is updated via PUT
Form resets after successful update

<h2>🗄️ Backend Flow</h2>
Uses Mongoose schema for product model
Controllers handle CRUD operations
Express routes map API endpoints to controllers
MongoDB stores product data

<h2>⚙️ Setup Instructions</h2>
Backend
cd backend
npm install
npm start

Make sure MongoDB is running.

Frontend
cd frontend
npm install
npm run dev

<h2>✅ Example Product Fields</h2>
Name
Color
Category
Price

<h2>👤 Author </h2>
Built by Adrich Fernandes
Purpose: Learning MERN stack fundamentals with correct CRUD logic
