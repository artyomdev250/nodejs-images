const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    status: { type: String, enum: ['active', 'pending', 'inactive'], required: true },
    balance: { type: Number, default: 0 },
    lastLogin: { type: Date, default: null },
    metadata: {
        city: { type: String },
        zip: { type: String }
    }
});

module.exports = mongoose.model('objects', UserSchema);
