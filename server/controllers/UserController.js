const User = require('../models/userModel');
const db = require('../models/database');

/**
 * userController methods for login and register
 */
const userController = {
    /**
     * 
     * @param {*} req, request from client
     * @param {*} res, response from server 
     * @param {*} next, move to next middleware
     * 
     * return a promise if the select query is successful for comparing email & password from DB to req.body,
     * else return a 404 error
     */
    postLogin(req, res, next) {
       // query 
       const query = `SELECT * FROM "user" WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
       db.conn.one(query)
        .then(postLogin => res.status(200).send({'msg': 'Login successful'}))
        .catch(err =>{ 
           console.log('The error is', err);
           res.status(404).send(err)
       });
       next();
    },
    /**
     * 
     * @param {*} req, request from client
     * @param {*} res, response from server 
     * @param {*} next, move to next middleware
     *  
     * return a promise if the insert query is successful for user name, email, and passowrd,
     * else return a 404 error
     */
    postRegister(req, res, next) {
        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });
        
        const query = {
            text: 'INSERT INTO "user" (name, password, email) VALUES($1, $2, $3) RETURNING id',
            values: [newUser.name, newUser.password, newUser.email]

        };

        db.conn.one(query)
        .then(postRegister => res.status(200).send({'msg':'User created!', 'id': postRegister.id}))
        .catch(err =>{ 
            console.log('The error is', err);
            res.status(404).send(err)
        });
        next();
    }
}

module.exports = userController;