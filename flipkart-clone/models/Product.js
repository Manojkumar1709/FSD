const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    sellerId: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviews: [
        {
            userId: String,
            comment: String,
            rating: Number,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    price: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    imageUrl: {
        type: String,
        default: 'https://placehold.co/400x300/e0e7ff/3b82f6?text=Product+Image'
    },
    description: {
        type: String,
        default: 'A fantastic product with great features.'
    },
    stock: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);