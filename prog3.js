fs = require('fs');

var buf = fs.readFileSync(process.argv[2], 'utf-8');
console.log(buf.split('\n').length - 1);
