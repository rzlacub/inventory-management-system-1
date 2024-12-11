const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// Import controllers
const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');

// Initialize dotenv
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes for items
app.get('/items', itemController.getItems);
app.get('/items/add', (req, res) => res.render('items/addItem'));
app.post('/items/add', itemController.addItem);
app.get('/items/edit/:id', itemController.editItemForm);
app.post('/items/edit/:id', itemController.updateItem);
app.get('/items/delete/:id', itemController.confirmDelete);
app.post('/items/delete/:id', itemController.deleteItem);

// Routes for users
app.get('/users', userController.getUsers);
app.get('/users/add', (req, res) => res.render('users/addUser'));
app.post('/users/add', userController.addUser);
app.get('/users/edit/:id', userController.editUserForm);
app.post('/users/edit/:id', userController.updateUser);
app.get('/users/delete/:id', userController.confirmDelete);
app.post('/users/delete/:id', userController.deleteUser);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB: ', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
