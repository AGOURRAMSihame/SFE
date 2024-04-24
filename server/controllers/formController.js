const Form = require('../models/form');


exports.createForm = async (req, res) => {
    try {
        const { title, fields } = req.body;
        const newForm = new Form({ title, fields });
        const savedForm = await newForm.save();
        res.status(201).json(savedForm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find().populate('fields');
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id).populate('fields');
        if (!form) {
            return res.status(404).json({ message: 'Formulaire non trouvé' });
        }
        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateForm = async (req, res) => {
    try {
        const { title, fields } = req.body;
        const updatedForm = await Form.findByIdAndUpdate(req.params.id, { title, fields }, { new: true });
        if (!updatedForm) {
            return res.status(404).json({ message: 'Formulaire non trouvé' });
        }
        res.status(200).json(updatedForm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteForm = async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);
        if (!deletedForm) {
            return res.status(404).json({ message: 'Formulaire non trouvé' });
        }
        res.status(200).json({ message: 'Formulaire supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
