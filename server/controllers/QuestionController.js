const db = require('../models/database');
const Question = require('../models/questionModel');
const moment = require('moment');


questionController = {
  postQuestion(req, res, next) {
    let newQuestion = {
      question: req.body.question,
      skill_id: req.body.skill_id,
      company: req.body.company,
      date: moment().format(),
    };
    
    console.log("newQuestion", newQuestion);
    let query = {
      text: 'INSERT INTO "questions" (question, skill_id, company, date) VALUES($1, $2, $3, $4) returning *',
      values: [newQuestion.question, newQuestion.skill_id, newQuestion.company, newQuestion.date]
    };

   db.conn.one(query)
    .then(postQuestion => {
        console.log("postQuestion", postQuestion);
      res.status(200).send(postQuestion)
      next();
    })
    .catch(err => {
      console.log('postQuestion Error: ', err);
      res.status(404).send(err)
    });
  },

getQuestion(req, res, next) {
  let questionQuery;
  let answerQuery;
  if (req.body.skill_id) {
    questionQuery = `SELECT * FROM "questions" WHERE skill_id =${req.body.skill_id} order by date desc`
  }
  else {
    questionQuery = `SELECT * FROM "questions" order by date desc`
  }
  db.conn.many(questionQuery)
    .then(questionsData => {
      const questions = questionsData;
      if (req.body.skill_id) {
        answerQuery = `select q.*, a.* from "questions" q inner join "answer" a on q.id = a.question_id where q.skill_id = ${req.body.skill_id} order by date desc`;
      }
      else {
        answerQuery = `select q.*, a.* from "questions" q inner join "answer" a on q.id = a.question_id order by date desc`;
      }
      db.conn.many(answerQuery)
        .then(answerData => {
          let result = questions.map((quest) => {
            quest.answers = answerData.filter((ans) => {
                return ans.question_id === quest.id
            }).sort(function(a, b) {
              return b.rating - a.rating
            })
            return quest;
          })
          res.status(200).send(result)
          next();
        })
        .catch(err => {
          if (err.message === "No data returned from the query.") {
            res.status(200).send(questionsData.map(question => {
              question.answers = [];
              return question;
            }));
            return;
          }
          res.status(404).send(err)
        });
    })
    .catch(err => {
      res.status(404).send(err)
    });
  }
}

module.exports = questionController;
