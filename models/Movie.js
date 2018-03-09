var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
	name: String,
	image: String,
	rating: Array,
	description: String,
	original_price: Number,
	sale_price: Number,
	quantity: Number
});

module.exports = mongoose.model("Movie", MovieSchema);