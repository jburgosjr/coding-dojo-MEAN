var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/cars') {
            fs.readFile('views/cars.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});  
                response.write(contents);  
                response.end(); 
            });
    }
    else if(request.url === '/images/10781130333_04875678b8_b.jpg') {
        fs.readFile('images/10781130333_04875678b8_b.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/.jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/garage1.jpg') {
        fs.readFile('images/garage1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/muscle_car_collage.jpg') {
        fs.readFile('images/muscle_car_collage.jpg',  function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/cat1.jpg') {
        fs.readFile('images/cat1.jpg',  function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/cat2.jpg') {
        fs.readFile('images/cat2.jpg',  function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/cat3.jpg') {
        fs.readFile('images/cat3.jpg',  function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/newCar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("Running in localhost at port 6789");