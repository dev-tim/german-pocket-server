var mongoose = require('mongoose');

// TODO move to config
var MONGO_URL = 'mongodb://localhost/test';

module.exports = function connectToDb () {
	return mongoose
		.connect(MONGO_URL)
		.connection;
};
