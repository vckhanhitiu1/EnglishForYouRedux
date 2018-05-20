var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passportSetup = require('./config/passport-setup');

const passport = require('passport');
const authRoutes = require('./routes/auth-routes')
const candidateRoutes = require('./routes/candidate-routes')
const teacherRoutes = require('./routes/teacher-routes')

app.use(passport.initialize());

User = require('./models/user');

app.use(bodyParser.json());


//Connect to Mongoose
mongoose.connect('mongodb://localhost/englishforyou');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());


app.use('/',authRoutes );
app.use('/', candidateRoutes);
app.use('/', teacherRoutes);


/*
  Allowing backend express can connect with frontend React
 */
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.listen(8081);
console.log('Starting...');