const db = require('../models/database');
const Question = require('../models/questionModel');
const moment = require('moment');

questionController = {
    postQuestion(req, res, next) {
        let newQuestion = new Question({
            question: req.body.question,
            skill_id: req.body.skill_id,
            company: req.body.company,
            date: moment().format(),
        });
        console.log(newQuestion)
        
        let query = {
            text: 'INSERT INTO "questions" (question, skill_id, company, date) VALUES($1, $2, $3, $4) returning id',
            values: [nnewQuestion.question, newQuestion.skill_id, newQuestion.company, newQuestion.date]
        };

        db.conn.one(query)
        .then(postQuestion => {
            res.status(200).send({'msg':'question created!'})
            next();
        })
        .catch(err =>{ 
            console.log('The error is', err);
            res.status(404).send(err)
        });
    },
    getQuestion(req, res, next) {
        let query;
        if(req.body.skill_id) {
            query = `SELECT * from questions1`
            //select q.question, a.answer from questions q inner join answer a on q.id = a.question_id where q.skill_id = 2 
        }

        else {
            query = 'SELECT * from "questions"'
        }
        db.conn.many(query)
        .then(data => {
            console.log('you are getting questions')
            res.send(data)
            next()
        })
        .catch(err => {
            res.status(404).send(err)
        })
        
    
}

}
module.exports = questionController;