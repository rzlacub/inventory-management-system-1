const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes (e.g., registration)
router.get('/add', (req, res) => res.render('users/addUser'));
router.post('/add', userController.addUser);

module.exports = router;
