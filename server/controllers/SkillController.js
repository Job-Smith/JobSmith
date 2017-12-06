const db = require('../models/database');

/**
 * userController methods for get and update for skills table
 */
const skillController = {
    /**
     * 
     * @param {*} req, request from client
     * @param {*} res, response from server 
     * @param {*} next, move to next middleware
     * 
     * return promise for select query if successful for skills table
     * 
     */
    getSkill(req, res, next) {
        const dataStorage = [];

        const query = 'SELECT * from "skills"';
        db.conn.many(query)
         .then(data => {
             console.log(data);
             res.send(data);
         })
         .catch(err => {
            console.log('The error is', err);
            res.status(404).send(err)
         });
    },
    /**
     * 
     * @param {*} req, request from client
     * @param {*} res, response from server 
     * @param {*} next, move to next middleware
     * 
     * return a promise for insert query if sucessful for skill and color,
     * else return a 404 error
     * 
     */
    updateSkill(req, res, next) {
        const query = {
            text: 'INSERT INTO "skills" (skill, color) VALUES($1, $2) RETURNING id',
            values: [req.body.skill, req.body.color]
        };

        db.conn.one(query)
          .then(updateSkill => res.status(200).send({'msg':'Skill created!', 'id': updateSkill.id}))
          .catch(err =>{ 
            console.log('The error is', err);
            res.status(404).send(err)
          });
    }
    

}

module.exports = skillController;