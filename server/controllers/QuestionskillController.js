const db = require('../models/database');
const Questionskill = require('../models/questionskillModel');

questionskillController = {
    postQuestionskill(req,res,next) {
        let questionskill = new Questionskill({
            skill_id: req.body.skill_id,
            question_id: req.body.question_id
        })
        console.log(req.body);
        let query = {
            text:'INSERT INTO "question_skill" (skill_id, question_id) VALUES ($1,$2) RETURNING id',
            values:[questionskill.skill_id, questionskill.question_id]
        }
        db.conn.one(query)
        .then(data => {
            res.send(data)
            next();
        })
        .catch(err => {
            console.log('hi')
            res.status(404).send(err)
        })
    },
    getQuestionskill(req,res,next) {
        let query = 'SELECT * FROM "question_skill"'
        db.conn.many(query)
        .then(data => {
            console.log('u are getting question skill')
            res.send(data)
            next();
        })
        .catch(err => {
            console.log('u are getting question skill')
            res.status(404).send(err)
        })
    }


}
module.exports = questionskillController;