var bodyParser = require('body-parser');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');

var app = express();
var movie = require('./routes/movie');

//body parser requirements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));

//mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/movie)', {useMongoClient: true, promiseLibarary:
require('bluebird') })
	.then(() => console.log('connection successful'))
	.catch((err) => console.error(err))

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/movie', movie);

//catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next){
	//set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'developement' ? err : {};

	//render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;