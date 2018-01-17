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

//Get Movie
router.get('/:id', function(req, res, next){
	Movie.findById(req.params.id, function(err, response){
		if(err) return next(err);
		res.json(response);
	});
});

// router.post()

module.exports = router;