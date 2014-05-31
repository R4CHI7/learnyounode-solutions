var dirname = process.argv[2];
var filter = process.argv[3];
var module = require('./prog6_module');

module(dirname, filter, function(err, list){
	if(err) throw err;
	list.forEach(function (file) {
    	console.log(file)
  	});
});	