class answerModel {
    constructor(data) {
        this.answer = data.answer;
        this.user_id = data.user_id;
        this.rating = data.rating;
        this.question_id = data.question_id;
    }
}
  
module.exports = answerModel;