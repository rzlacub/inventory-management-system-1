const Item = require('../models/itemModels');

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.render('items/index', { items });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Add item form
exports.addItemForm = (req, res) => {
  res.render('items/addItem');
};

// Add a new item
exports.addItem = async (req, res) => {
  const { name, category, quantity, price, description } = req.body;
  const newItem = new Item({ name, category, quantity, price, description });

  try {
    await newItem.save();
    res.redirect('/items');
  } catch (err) {
    res.status(500).send(err);
  }
};

// Edit item form
exports.editItemForm = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.render('items/editItem', { item });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    await Item.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/items');
  } catch (err) {
    res.status(500).send(err);
  }
};

// Confirm delete
exports.confirmDelete = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.render('items/confirmDelete', { item });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/items');
  } catch (err) {
    res.status(500).send(err);
  }
};
