const db = require('../models/database');
const Answer = require('../models/answerModel');
const moment = require('moment');

answerController = {
    postAnswer(req, res, next) {
        let newAnswer = new Answer({
            answer: req.body.answer,
            user_id: req.body.user_id,
            rating: req.body.rating,
            question_id: req.body.question_id
        })
        let query = {
            text: 'INSERT INTO "answer" (answer, user_id, rating, question_id) VALUES($1, $2, $3, $4) returning id',
            values: [newAnswer.answer, newAnswer.user_id, newAnswer.rating, newAnswer.question_id]
        }
        db.conn.one(query)
            .then(postAnswer => {
                res.status(200).send({ 'msg': 'answer created!' })
                next()
            })
            .catch((err) => {
                console.log('The error is', err);
                res.status(404).send(err)
            })
    },
    getAnswer(req, res, next) {
        let query = 'SELECT * FROM "answer"'
        db.conn.many(query)
            .then(data => {
                res.send(data)
                next()
            }
            )
            .catch(err => {
                res.status(404).send(err)
            })
    }
}
module.exports = answerController;