const express = require('express');
const router = express.Router();
const FormController = require('../controllers/formController');

// Route pour récupérer les types de champs disponibles
router.get('/inputTypes', FormController.getInputTypes);

// Vos autres routes existantes pour créer, lire, mettre à jour et supprimer les formulaires

module.exports = router;
