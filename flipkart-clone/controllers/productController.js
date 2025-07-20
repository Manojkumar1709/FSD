// controllers/productController.js
const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.params.id });

        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        console.error(err.message);
        // Check if the error is due to an invalid ID format
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Invalid Product ID format' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Add a new product
// @route   POST /api/products
// @access  Private (e.g., Admin only)
exports.addProduct = async (req, res) => {
    const { productId, name, sellerId, ratings, reviews, price, discount, imageUrl, description, stock } = req.body;

    try {
        const newProduct = new Product({
            productId,
            name,
            sellerId,
            ratings,
            reviews,
            price,
            discount,
            imageUrl,
            description,
            stock
        });

        const product = await newProduct.save();
        res.status(201).json(product); // 201 Created
    } catch (err) {
        console.error(err.message);
        if (err.code === 11000) { // Duplicate key error (for unique productId)
            return res.status(409).json({ msg: 'Product with this ID already exists' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private (e.g., Admin only)
exports.updateProduct = async (req, res) => {
    const { name, sellerId, ratings, reviews, price, discount, imageUrl, description, stock } = req.body;

    try {
        let product = await Product.findOne({ productId: req.params.id });

        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        // Update product fields
        product.name = name || product.name;
        product.sellerId = sellerId || product.sellerId;
        product.ratings = ratings !== undefined ? ratings : product.ratings;
        product.reviews = reviews || product.reviews;
        product.price = price !== undefined ? price : product.price;
        product.discount = discount !== undefined ? discount : product.discount;
        product.imageUrl = imageUrl || product.imageUrl;
        product.description = description || product.description;
        product.stock = stock !== undefined ? stock : product.stock;

        await product.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private (e.g., Admin only)
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ productId: req.params.id });

        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        res.json({ msg: 'Product removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
