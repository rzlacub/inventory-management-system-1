const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// CRUD routes for items
router.get('/', itemController.getItems);
router.get('/add', itemController.addItemForm);
router.post('/add', itemController.addItem);
router.get('/edit/:id', itemController.editItemForm);
router.post('/edit/:id', itemController.updateItem);
router.get('/delete/:id', itemController.deleteItemForm);
router.post('/delete/:id', itemController.deleteItem);

module.exports = router;
