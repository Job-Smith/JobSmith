pgp = require('pg-promise')(),
uri = process.env.POSTGRES_URI || 'postgres://mawbegxb:iEEalM76lWH1ZkSlFoAUlZUm788pcU9J@baasu.db.elephantsql.com:5432/mawbegxb';


//dotenv module => We don't want our passwords to be insecure, so instead of making our local variables available to our Github we put our env file in the .gitignore file and require in the dotenv module that provides you with environment variables. This file will be accessible to you and your collaborators, but no one else.

//db is being assigned to all tables found with the parameter as it's name ex. getAll: (users) --> will get all 'user' tables  
const db = {};

//connection to the pg-promise database through uri listed in our secret file
db.conn = pgp(uri);



module.exports = db;