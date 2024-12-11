const mongoose = require('mongoose');
const User = require('../models/userModels');

mongoose.connect('mongodb://127.0.0.1:27017/user-db')
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        consolele.log("Error");
        console.log(err);
    })

    const seedDb = async() => {
        // await User.deleteMany({})
        const users = new User({
            name: 'Razel Ray Acub',
            emailAddress: 'rzlacub@email.com'
        })
        await users.save();
    }

    seedDb(),then(() => {
        mongoose.connection.close();
    })