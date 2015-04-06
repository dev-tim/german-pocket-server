'use strict';

var index = require('./handlers/index');
var listTasks = require('./handlers/tasks/list');
var addTask = require('./handlers/tasks/add');
var removeTask = require('./handlers/tasks/remove');
var infoTask = require('./handlers/tasks/info');

var statsInfo = require('./handlers/index');


module.exports = function registerRoutes (app) {
	app.get('/', index);

	app.get('/tasks', listTasks);
	app.get('/tasks/list', listTasks);
	app.get('/tasks/add', addTask);
	app.get('/tasks/remove', removeTask);
	app.get('/tasks/info', infoTask);

	app.get('/stats', statsInfo);
	app.get('/stats/info', statsInfo);

	return app;
};
