var fs = require("fs");
var express = require("express");

var app = express();
app.listen(8888,function(){
	console.log("服务器启动，端口号是8888");
});


var fileData = "";
fs.readFile("news.json",function(err,data){
	if (err) {
		console.log(err);
	};
	fileData+=data;
});

// 托管静态文件
app.use( express.static("./web") );

app.get("/",function(req,res){
	res.sendFile(__dirname+"/web/index.html");
});

// 设置路由
app.get("/row",function(req,res){
	res.send(fileData);
});






