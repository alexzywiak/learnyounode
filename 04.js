var fs            = require('fs');
var path          = require('path');
var results       = '';
var ext           = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, files){
  if(err){
    console.log('It\'s all f-ed up!');
  } else {
    for(var i = 0; i < files.length; i++){
      if ( path.extname(files[i]) === ext ){
        results += files[i] + "\n";
      }
    }
  }
  console.log(results);
});