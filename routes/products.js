import express from 'express';
const router = express.Router();

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProductQuantity
} from '../controllers/products.controller.js';

// Define routes and their corresponding controller functions
router.get('/', getProducts); // Route for getting all products
router.post('/create', createProduct); // Route for creating a new product
router.delete('/:id', deleteProduct); // Route for deleting a product by ID
router.post('/:id/update_quantity/', updateProductQuantity); // Route for updating product quantity by ID

export default router;