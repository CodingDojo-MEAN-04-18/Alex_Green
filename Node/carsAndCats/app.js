var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/cars') {
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/new'){
        fs.readFile('views/newCar.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end()
        })
    }
    else if(request.url === '/images/gtr.jpg'){
        fs.readFile('./images/gtr.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/944.jpg'){
        fs.readFile('./images/944.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/sti.jpg'){
        fs.readFile('./images/sti.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end()
        })
    }
    else if(request.url === '/images/cat.jpg'){
        fs.readFile('./images/cat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end()
        })
    }
    else if(request.url === '/images/cat2.jpg'){
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end()
        })
    }
    else if(request.url === '/images/cat3.jpg'){
        fs.readFile('./images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else{
        response.end("no existo")
    }
})
server.listen(7077);
console.log("running in localhost as port 7077")