const Input = require('../models/Input');

exports.saveInputs = async (req, res) => {
    try {
        const inputsData = req.body;
        const savedInputs = await Input.create(inputsData);
        res.status(201).json(savedInputs);
    } catch (error) {
        console.error('Error saving inputs:', error);
        res.status(500).json({ message: 'Error saving inputs' });
    }
};
