const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer(function( request, response ){
	if( request.url === "/cars" ){
		fs.readFile('./views/cars.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}
    else if( request.url === "/cats" ){
		fs.readFile('./views/cats.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}
    else if( request.url === "/cars/new" ){
		fs.readFile('./views/newcar.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'} );
				response.write( contents );
				response.end();
		})
	}
    else if(request.url === '/catscolor'){
        fs.readFile('./stylesheets/cats.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
        })
    }
    else if(request.url === '/carscolor'){
        fs.readFile('./stylesheets/cars.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
        })
    }
    else if(request.url === '/images/cat1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car3.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
	else{
		response.writeHead( 404 );
		response.end( "Route Not Found!" );
	}
})


server.listen( 7077 );