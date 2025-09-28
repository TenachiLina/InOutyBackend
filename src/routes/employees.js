const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

// Routes
router.get('/', employeesController.getEmployees);
router.post('/', employeesController.addEmployee);
router.delete('/:id', employeesController.deleteEmployee); // AJOUTEZ CETTE LIGNE

module.exports = router;
