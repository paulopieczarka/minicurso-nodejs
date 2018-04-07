const mongoose = require('mongoose');

const batataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isSweet: { type: Boolean, default: false },
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Batata', batataSchema);