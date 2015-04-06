var mongoose = require("mongoose");

var StatsSchema = mongoose.Schema({
	requested: Number,
	passed: Number
});

module.exports = mongoose.model('Stats', StatsSchema);


