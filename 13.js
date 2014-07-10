var http = require('http');
var url  = require('url');

function isoTime( time ){
  return {
    hour : time.getHours(),
    minute : time.getMinutes(),
    second : time.getSeconds()
  };
}

function unixTime( time ){
   return { unixtime : time.getTime() } 
}

var server = http.createServer( function( request, response ){
  var parseUrl = url.parse( request.url, true );
  var time = new Date( parseUrl.query.iso );
  var result;

  if( url.parse( request.url, true ).pathname === '/api/parsetime' ){
    result = isoTime( time );  
  } else if( url.parse( request.url, true ).pathname === '/api/unixtime' ){
    result = unixTime( time );
  }

  if( result ){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end( JSON.stringify( result ) );
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen( process.argv[2] );