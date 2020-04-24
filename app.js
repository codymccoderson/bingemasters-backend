const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    keys = require('./config/keys');

require('./models/UserModel');
require('./services/passport');

const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),
    googleRouter = require('./routes/auth'),
    scoreRouter = require('./routes/score');

mongoose.connect(keys.mongoURI);
 
const app = express();

app.use(
    cookieSession({
        // max duration of cookie life before auto expiration - must be expressed in ms 
        // 30 days * 24 hours * 60 minutes * 60 seconds * 1000 ms
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // key to encrypt cookie to prevent manual user takeover/override
        // set as an array to house all cookie keys to randomize and encrypt
        keys: [keys.cookieKey]
    })
);

// Tells passport to make use of the cookies
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', googleRouter);
app.use('/', scoreRouter);
module.exports = app;