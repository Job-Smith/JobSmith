const User = require('../models/userModel');
const db = require('../models/database');
const bcrypt = require('bcrypt')

const userController = {
    postLogin(req, res, next) {
       const query = `SELECT * FROM "user" WHERE email = '${req.body.email}'`;
       db.conn.one(query)
        .then(postLogin => {
            if(bcrypt.compareSync(req.body.password, postLogin.password)) {
                res.status(200).send({'msg': 'Login successful'});
            }
             else {
                console.log('Password dont match')
            }
        })
        .catch(err => { 
           console.log('The error is', err);
           res.status(404).send(err);
       });
    },

    postRegister(req, res, next) {
        let newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });

        bcrypt.hash(req.body.password, 10, function (err, hash) {
            console.log(hash)
        
        let query = {
            text: 'INSERT INTO "user" (name, password, email) VALUES($1, $2, $3) RETURNING id',
            values: [newUser.name, hash, newUser.email]
        };

        db.conn.one(query)
        .then(postRegister => {
            res.status(200).send({'msg':'User created!', 'id': postRegister.id});
            next();
        })
        .catch(err =>{ 
            console.log('The error is', err);
            res.status(404).send(err);
        });
    })
}
}

module.exports = userController;