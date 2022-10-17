const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/NewController');

router.get('/hello', newController.show);
router.get('/', newController.index);

module.exports = router;
