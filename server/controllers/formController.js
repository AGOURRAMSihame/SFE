const Form = require('../models/form');

exports.saveFormData = async (req, res) => {
    const formData = req.body;

    try {
        const savedForm = await Form.create(formData);
        res.status(201).json(savedForm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'enregistrement du formulaire.' });
    }
};
