http = require('http');

var URL = process.argv[2];

http.get(URL, callback);

function callback (response) {
	response.setEncoding('utf-8');
	var resp = "";
	response.on('data', function(data) {
		resp += data;
	});
	response.on('end', function(data) {
		console.log(resp.length);
		console.log(resp);
	});
}