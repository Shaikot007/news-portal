const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/news
// @desc    Get all news articles for the news page
router.get('/', newsController.getAllNews);

// @route   GET api/news/top
// @desc    Get top 6 news articles for the home page banner/section
router.get('/top', newsController.getTopNews);

// @route   GET api/news/user/all
// @desc    Get all news articles created by the authenticated user
router.get('/user/all', authMiddleware, newsController.getUserNews);

// @route   GET api/news/:id
// @desc    Get a single news article configuration by ID
router.get('/:id', newsController.getNewsById);

// @route   POST api/news
// @desc    Create and publish a new news article
router.post('/', authMiddleware, newsController.createNews);

// @route   PUT api/news/:id
// @desc    Update an existing news article by ID
router.put('/:id', authMiddleware, newsController.updateNews);

// @route   DELETE api/news/:id
// @desc    Delete a news article by ID
router.delete('/:id', authMiddleware, newsController.deleteNews);

module.exports = router;