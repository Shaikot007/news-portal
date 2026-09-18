const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/auth/register
// @desc    Register a new user
router.post('/register', authController.register);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
router.post('/login', authController.login);

// @route   PUT api/auth/profile
// @desc    Update user profile data
router.put('/profile', authMiddleware, authController.updateProfile);

module.exports = router;