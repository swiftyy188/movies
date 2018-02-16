var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	original_price: Number,
	sale_price: Number,
});

module.exports = mongoose.model("Movie", MovieSchema);