var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
  if (request.method === 'GET' && request.url === '/') {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    fs.readFile('./index.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    });
  } else if (request.method === 'GET' && request.url === '/style.css') {
    response.setHeader("Content-Type", "text/css; charset=utf-8");
    fs.readFile('./style.css', function(err, file){
      response.write(file, 'binary');
      response.end();
    });
  } else {
    response.setHeader("Content-Type", "binary");
    fs.readFile('./404.jpg', function(err, file){
      response.statusCode = 404;
      response.write(file, 'binary');
      response.end();
    /* inny sposób na else
    response.setHeader("Content-Type", "FILEINFO_MIME_TYPE");
    fs.readFile('./404.jpg', function(err, data) {
    response.statusCode = 404;
    response.write(data);
    response.end();
	});*/
	});
	}
});

server.listen(8080);