const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    inputs: [{
        type: { type: String },
        label: String,
        options: [String] // Si vous avez besoin de prendre en charge les options pour les champs de type checkbox ou radio
    }],
    // Autres champs du formulaire si nécessaire
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
