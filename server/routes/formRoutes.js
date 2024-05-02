const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/save', formController.saveFormData);

module.exports = router;
