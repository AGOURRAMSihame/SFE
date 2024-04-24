const mongoose = require('mongoose');

// Définition du schéma de champ
const fieldSchema = new mongoose.Schema({
    label: String,
    type: {
        type: String,
        enum: ['text', 'number', 'email', 'date', 'checkbox', 'radio', 'select']
    }
});

// Définition du schéma de formulaire
const formSchema = new mongoose.Schema({
    title: String,
    fields: [fieldSchema] // Utilisation du schéma de champ directement ici
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
