const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    label: String,
    type: {
        type: String,
        enum: ['text', 'number', 'email', 'date', 'checkbox', 'radio', 'select']
    }
});

const formSchema = new mongoose.Schema({
    title: String,
    fields: [fieldSchema]
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
