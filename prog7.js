http = require('http');

var URL = process.argv[2];

var stream = http.get(URL, callback);

function callback(response) {
	response.setEncoding('utf-8');
	response.on('data', function(data) {
		console.log(data);
	});
}