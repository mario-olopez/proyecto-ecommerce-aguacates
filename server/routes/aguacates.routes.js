const express = require('express');
const router = express.Router();
const aguacatesController = require('../controllers/aguacates.controller');

//http://localhost:3000/api/
router.get('/', aguacatesController.getStock);

module.exports = router;
