var module = require('./05module.js');
var dir    = process.argv[2];
var ext    = process.argv[3];

module(dir, ext, function(err, data){
  if(err){
    console.log('ERROR!');
  } else {
    var results = '';
    for (var i = 0; i < data.length; i++) {
      results += data[i] + '\n';
    };
    console.log(results);
  }
});