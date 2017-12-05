const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/UserController');
const skillController = require('./controllers/SkillController');


// define port
const PORT = process.env.PORT || 3000;

/**
 * Middleware for bodyParser
 */
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

/**
 * serve index.html
 */
app.use('/', express.static(__dirname + '/../public'));
app.use('/', express.static(__dirname + '/../assets'));

/**
 * Add headers middleware 
 */
 app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

// User login, register, skills
app.post('/login', userController.postLogin)
    .post('/register', userController.postRegister)
    .get('/skills', skillController.getSkill)
    .post('/skills', skillController.updateSkill);

/**
 * Listen to Port
 */
app.listen(PORT, console.log('listening port ' + PORT));