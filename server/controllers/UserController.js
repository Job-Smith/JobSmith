const User = require('../models/userModel');
const db = require('../models/database');

const userController = {
    postLogin(req, res, next) {
       //query DB to grab email and password from user DB
       //store it in variables email and password
       //compare req.body.email and req.body.password
       //redirect to the landing page
    },

    postRegister(req, res, next) {
        let newUser = new User({
            name: req.body.name,
            passowrd: req.body.password,
            email: req.body.email,
        });

        let query = {
            // text: 'INSERT INTO user (name, password, email) VALUES($1, $2, $3) RETURNING _id',
            text: 'INSERT INTO user (name, password, email) VALUES($1, $2, $3)',
            values: Object.values(newUser)
        };

        db.conn.one(query)
        .then(postRegister => res.status(200).send({'msg':'User created!', 'id': postRegister._id}))
        .catch(err =>{ 
            console.log('The error is', err);
            res.status(404).send(err)
        });
    }
}

module.exports = userController;