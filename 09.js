var http  = require('http');
var bl    = require('bl');

var results = [];
var count   = 0;

var urls  = process.argv.splice(2,3);

function printResults(){
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  };
}

function httpGet(index){
  http.get(urls[index], function( response ){
    response.pipe(bl(function(err, data){

      if(err) console.error(err);

      results[index] = data.toString();
      count ++

      if(count === 3){
        printResults();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
};