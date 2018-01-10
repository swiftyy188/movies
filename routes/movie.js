var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Deal = require('../models/Movie.js');

// Home Page
router.get('/', function(req, res, next){
	Movie.find(function(err, deals){
		if(err) return next(err);
		res.json(movies);
	});
});

router.post('/', function(req, res, next){
	Movie.create(req.body, function(err, deal){
		if(err) return next(err);
		res.json(movie);
	});
});

module.exports = router;