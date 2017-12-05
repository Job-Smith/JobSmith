class userModel {
    constructor(data) {
        this.name = data.name;
        this.password = data.password;
        this.email = data.email;
    }
}
  
module.exports = userModel;