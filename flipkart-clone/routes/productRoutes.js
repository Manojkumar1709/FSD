// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', productController.getProducts);

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get('/:id', productController.getProductById);

// @route   POST /api/products
// @desc    Add a new product
// @access  Private (e.g., Admin only - you'd add auth middleware here)
router.post('/', productController.addProduct);

// @route   PUT /api/products/:id
// @desc    Update a product
// @access  Private (e.g., Admin only - you'd add auth middleware here)
router.put('/:id', productController.updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete a product
// @access  Private (e.g., Admin only - you'd add auth middleware here)
router.delete('/:id', productController.deleteProduct);

module.exports = router;