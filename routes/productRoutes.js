const express = require('express');
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers.js/productController');

const router = express.Router();

// Routes for managing products
router.route('/').get(getAllProducts).post(createProduct);

// Routes for a specific product by ID
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
