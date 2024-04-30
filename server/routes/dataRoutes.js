const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Assurez-vous que dataController.saveInputs est une fonction définie
router.post('/data', dataController.saveInputs);

module.exports = router;
