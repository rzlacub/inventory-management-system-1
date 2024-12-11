const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log("Fetched users:", users);
        res.render('users/index', { users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        console.log("User created:", newUser);
        res.redirect('/users');
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.editUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log("Editing user:", user);
        res.render('users/editUser', { user });
    } catch (error) {
        console.error("Error editing user:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log("User updated:", updatedUser);
        res.redirect('/users');
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        console.log("User deleted:", deletedUser);
        res.redirect('/users');
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Internal Server Error");
    }
};
