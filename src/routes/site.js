const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');
const { route } = require('./new');

router.use('/search/hello', siteController.search1);
router.use('/search', siteController.search);
router.use('/main', siteController.main);

module.exports = router;
