var lessonService = require('../../service/lesson-service');

module.exports = function (req, res) {
	lessonService.addLesson(req.body)
		.then(function (list) {
			res.json(list)
		})
		.catch(function (err) {
			console.log('Failed to fetch lessons list', err);
			res.json({
				error: err
			})
		});
};
