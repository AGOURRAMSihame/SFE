const mongoose = require('mongoose');

const inputSchema = new mongoose.Schema({
    label: String,
    type: String,
    value: String
});

const Input = mongoose.model('Input', inputSchema);

module.exports = Input;
