const Form = require('../models/form');

exports.getInputTypes = async (req, res) => {
    try {
        const types = await Form.distinct('fields.type');
        res.json(types);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Vos autres fonctions de contrôleur existantes pour créer, lire, mettre à jour et supprimer les formulaires
