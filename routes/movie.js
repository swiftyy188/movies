var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');

// Home Page
router.get('/', function(req, res, next){
	Movie.find(function(err, movies){
		if(err) return next(err);
		res.json(movies);
	});
});

router.post('/', function(req, res, next){
	Movie.create(req.body, function(err, movie){
		if(err) return next(err);
		res.json(movie);
	});
});

module.exports = router;