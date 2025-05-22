const express = require('express');
const router = express.Router();
const aguacatesController = require('../controllers/aguacates.controller');

router.get('/', aguacatesController.getStock);

module.exports = router;
