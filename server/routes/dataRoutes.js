const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route POST pour enregistrer les données du formulaire
router.post('/', dataController.saveFormData);

module.exports = router;
