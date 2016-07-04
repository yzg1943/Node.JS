//加载http模块
var http = require('http');
//创建服务器
http.createServer(
//req 获取这次请求的信息，从哪个URL过来，类型是post
//res = response(响应的意思)
  function(req , res){
  	res.writeHead(200,{'Content-type': 'text/plain'});
  	res.end('Hello Node.JS\n');
  	//端口监听
  }).listen(1337,'127.0.0.1');
//打印日志
console.log('Server running at http://127.0.0.1:1337/');