//Async

var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  if (err){
    console.log('It\'s all fucked up!');
  } else {
    var newLines = data.toString().split('\n').length - 1;
  }
  console.log(newLines);
});