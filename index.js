'use strict';
if (process.env.NODE_ENV !== 'production') {
	require('longjohn');
}

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});
