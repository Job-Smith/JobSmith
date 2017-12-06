class questionModel {
    constructor(data) {
        this.question = data.question;
        this.skill_id = data.skill_id;
        this.company = data.company;
        this.date = data.date;
        this.resource = data.resource;
    }
}
  
module.exports = questionModel;