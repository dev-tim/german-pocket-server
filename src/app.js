var express = require('express');
var routes = require('./routes');

// init db
var db = require('./mongo/mongoose')();
db.on('error', function (error) {
	console.error('Connection error occurred', error);
	throw new Error('Failed to connecto to database' + error);
});

db.once('open', function (callback) {
	console.log('Connection to db was opened');
	var lessonService = require('./service/lesson-service');
	lessonService.addLesson({
		asdf: 'ololo'
	});
});

//register routes
var app = routes(express());


module.exports = app;
