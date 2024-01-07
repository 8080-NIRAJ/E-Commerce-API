# Ecommerce-API
API for an ecommerce platform admin to manage product inventory


# Project Usage Instructions
1. Install nodejs
2. Inside main directory -> npm install
3. To start project -> npm start
4. Project will now be running on port 5000.

## Languages and Tools Used
Nodejs, Express, MongoDB, Mongoose, Git, GitHub, VS Code, Postman

# API URL's
1. Create a product // POST // http://localhost:3600/products/create
2. Get all products // GET // http://localhost:3600/products
3. Delete a product // DELETE // http://localhost:3600/products/:id
4. Update a product // POST //http://localhost:3600/products/:id/update_quantity/?number=5

## Folder Structure

```
.
├── congig
│   └── mongoose.js
|            
├── controllers
│   └── product.controller.js
|
├── models
│    └── model.product.js
|
├── routes
│    └── products.js
|
├── index.js
├── package-lock.json
├── package.json
└── README.md