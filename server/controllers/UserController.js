const User = require('../models/userModel');
const db = require('../models/database');

const userController = {
    postLogin(req, res, next) {
       const query = `SELECT * FROM "user" WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
       db.conn.one(query)
        .then(postLogin => res.status(200).send({'msg': 'Login successful'}))
        .catch(err =>{ 
           console.log('The error is', err);
           res.status(404).send(err)
       });
    },

    postRegister(req, res, next) {
        let newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });
        
        let query = {
            text: 'INSERT INTO "user" (name, password, email) VALUES($1, $2, $3) RETURNING id',
            values: [newUser.name, newUser.password, newUser.email]

        };

        db.conn.one(query)
        .then(postRegister => res.status(200).send({'msg':'User created!', 'id': postRegister.id}))
        .catch(err =>{ 
            console.log('The error is', err);
            res.status(404).send(err)
        });
    }
}

module.exports = userController;