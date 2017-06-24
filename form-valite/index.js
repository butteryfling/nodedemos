var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.listen(8888,function(){
	console.log("服务器启动，端口号是8888");
});

// 托管静态文件
app.use( express.static("./web") );
// 设置路由
app.get("/",function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname + "/web/index.html");
});
app.get("/login",function(req,res){
	res.sendFile(__dirname + "/web/loggin.html");
});
app.get("/regsiter",function(req,res){
	res.sendFile(__dirname+"/web/reg.html");
})


// 注册页面----------------get
// 存储用户信息的数组。每一个数组元素就是一个用户信息
var userArr = [];
app.get("/zhuce",function(req,res){
	// req.query的属性值是请求参数组成的对象
	// console.log(req.query);
	for (var i = 0; i < userArr.length; i++) {
		if( userArr[i].username == req.query.username ){
			res.send("该用户名已经被占用！");
			return;
		}
	};
	userArr.push( req.query );
	res.send("注册成功");
	console.log(userArr);
});


// post验证登录
var urlencode = bodyParser.urlencoded({extended:false});
app.post("/zhuce2",urlencode,function(req,res){
	console.log(req.body);
	res.send("post------请求参数");
});






