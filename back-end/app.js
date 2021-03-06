var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passportSetup = require('./config/passport-setup');

const passport = require('passport');
const authRoutes = require('./routes/auth-routes')
const candidateRoutes = require('./routes/candidate-routes')
const teacherRoutes = require('./routes/teacher-routes')
const PORT = process.env.PORT || 8081
const MONGO_URL = 'mongodb://khanhvo:Khanhyoulyitiu1@ds245250.mlab.com:45250/englishforyou';

app.use(passport.initialize());

User = require('./models/user');

app.use(bodyParser.json());


//Connect to Mongoose
mongoose.connect(MONGO_URL);
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

/*
  Allowing backend express can connect with frontend React
 */
app.use(function(req, res, next) {


    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "*");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/',authRoutes );
app.use('/', candidateRoutes);
app.use('/', teacherRoutes);



app.listen(PORT, () => console.log(`*********Listening on ${ PORT }`));
//app.listen(3000);
console.log('Starting...');
