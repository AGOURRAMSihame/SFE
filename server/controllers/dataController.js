const Input = require('../models/Input');

exports.saveFormData = async (req, res) => {
    try {
        const formData = req.body;
        
        // Créer un nouvel objet pour contenir toutes les données du formulaire
        const formEntry = {};

        // Parcourir toutes les clés du formulaire et les ajouter à l'objet formEntry
        for (const key in formData) {
            formEntry[key] = formData[key].value;
        }

        // Enregistrer le formulaire entier dans la base de données
        const savedFormEntry = await Input.create(formEntry);
        
        res.status(201).json(savedFormEntry);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
};
