var mongoose = require("mongoose");

var LessonSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	photoUrl: {type: String, default: '/public/img/dummy-icon.png'}
});

module.exports = mongoose.model('Lesson', LessonSchema);


