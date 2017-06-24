
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

	if(req.url == "/A"){
// 读取a.html文件 并返回给客户端
		fs.readFile("./data/a.html",function(err,data){
			res.writeHead("200",{
				"Content-Type" : "text/html"
			})
			res.end(data);
		});
	}else if(req.url == "/B"){

	}else if (req.url == "/image") {
		fs.readFile("bd_bg.png",function(err,data){
			res.writeHead("200",{
				"Content-type" : "img/png"
			})

			res.end(data);
		})
	}
})

server.listen(8888,function(){
	console.log("已开启");
});