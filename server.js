var http = require('http');
http.createServer(
	function(req,res){
		res.writeHead(200,{'Content-type':'text/plain'});
		res.end('Hello Node.JS\n');
	}
).listen(1337,'127.0.0.1');
console.log('server running at http://127.0.0.1:1337');