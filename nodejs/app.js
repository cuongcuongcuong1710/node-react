var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

import bodyParser from 'body-parser';
import { errorHandle } from './src/middleWares/errorMiddleWare';
import cors from 'cors';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup

//-------------------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
//-------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }))
app.use(errorHandle);

module.exports = app;
