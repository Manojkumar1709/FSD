// server.js
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors'); // Import cors
require('dotenv').config(); // Load environment variables

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json()); // Allows us to accept body data
app.use(cors()); // Enable CORS for all routes

// Define Routes
app.use('/api/products', productRoutes);

// Simple root route
app.get('/', (req, res) => {
    res.send('Flipkart Clone API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));