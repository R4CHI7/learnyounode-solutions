fs = require('fs');
path = require('path')

var filename = process.argv[2];
var filter = process.argv[3];

fs.readdir(filename, callback);

function callback(err, files) {
	if(err) throw err;
	for(var i=0; i<files.length; i++) {
		if(path.extname(files[i]) === '.' + filter)
			console.log(files[i]);
	}
}
