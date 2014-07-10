var http = require('http');
var url  = process.argv[2];

http.get(url, function(response){
  var completeData = '';

  response.on('data', function(data){
    completeData += data.toString();
  });

  response.on('end', function(){
    console.log(completeData.length);
    console.log(completeData);
  });
});