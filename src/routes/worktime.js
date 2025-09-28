const express = require('express');
const router = express.Router();
const worktimeController = require('../controllers/worktimeController');

// Routes
router.post('/', worktimeController.saveWorkTime);
router.get('/employee/:employeeId', worktimeController.getWorkTimesByEmployee);
router.get('/date/:date', worktimeController.getWorkTimesByDate); // UNCOMMENTED
router.put('/:id', worktimeController.updateWorkTime); // You can uncomment this too if needed

module.exports = router;