const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, default: null }
});

module.exports = mongoose.model('products', ProductSchema);
