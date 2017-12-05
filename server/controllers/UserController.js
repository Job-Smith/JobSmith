const User = require('../models/userModel');
const db = require('../models/database');

const userController = {
    postLogin(req, res, next) {
        // let loginUser = new User({
        //     email: req.body.email,
        //     password: req.body.password
        // })

        let query = `SELECT * FROM "user" WHERE email = '${req.body.email}' AND password = '${req.body.password}';`
            // value: [req.body.email, req.body.password]
        
        db.conn.one(query)
        .then(postLogin => res.status(200).send({'msg':'User logged in!'}))
        .catch(err =>{ 
            console.log('The error is', err);
            res.status(404).send(err)
        });
       //query DB to grab email and password from user DB
       //store it in variables email and password
       //compare req.body.email and req.body.password
       //redirect to the landing page
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