'use strict';
module.exports = function registerHandler(server){
	server.get('/', function (req, res, next) {
		res.end('alive');
		return next();
	});
};
