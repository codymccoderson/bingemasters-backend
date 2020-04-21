const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    keys = require('./config/keys');

require('./services/passport');
require('./models/User')

const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),
    googleRouter = require('./routes/auth');

mongoose.connect(keys.mongoURI);
 
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', googleRouter);
module.exports = app;