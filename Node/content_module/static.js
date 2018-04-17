const path = require('path');
const fs = require('fs');

module.exports = function(request, response){
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'})
            response.write(contents);
            response.end();
        });
    }else if(path.dirname(request.url) === '/images'){
        fs.readFile('.'+request.url, function(errors, contents){
            response.writeHead(200, {'Content-type': 'img/jpg'})
            response.write(contents);
            response.end();
        })
    }else if(path.dirname(request.url) === '/static'){
        fs.readFile('.'+request.url, function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'})
            response.write(contents);
            response.end();
        })
    }else{
        response.end("This doesn't look like anything at all")
    }
}