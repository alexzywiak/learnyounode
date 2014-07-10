var fs      = require('fs');
var path    = require('path');
var results = [];

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function(err, data){
    if (err){
      return callback(err);
    } else {
      for(var i = 0; i < data.length; i++){
        if( path.extname(data[i]) === '.' + ext){
          results.push(data[i]);
        }
      }
    }
    callback(null, results);
  });
};