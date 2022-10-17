const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');

router.post('/store',UserController.store);
router.put('/update/:slug',UserController.update);
router.put('/delete/:slug',UserController.delete);
router.put('/truedelete/:slug',UserController.trueDelete)
router.get('/create',UserController.UserCreate);
router.get('/redo',UserController.UserRedo)
router.get('/update/:slug',UserController.UserUpdate);
router.get('/:slug',UserController.UserDetail);
router.get('/', UserController.User);
module.exports = router




