const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

// Register a new user
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

module.exports = router;
