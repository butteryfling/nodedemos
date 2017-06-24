var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	var data = fs.readFile("city.json",function(error,data){
		console.log(data);
		res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8',
			'Access-Control-Allow-Origin':'*'});
		res.end(data);
	})
}).listen(8888,function(){
	console.log("服务器已开启，端口号为8888");
})