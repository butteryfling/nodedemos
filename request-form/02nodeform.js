var http = require("http");
var fs = require("fs");
var util = require("util");

var formidable = require('formidable');

var server = http.createServer(function(req,res){
	if (req.url == '/uploads' && req.method.toLowerCase() == 'post') {
    // parse a file upload 
	    var form = new formidable.IncomingForm();
	 	
	// fields:包含着表单元素
	// files:包含着文件信息
	    form.parse(req, function(err, fields, files) {
	      res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
	      // res.end(util.inspect({fields: fields, files: files}));
	      console.log(files);
	      res.end("提交成功");
	    });
	 
	    return;
  	}
})


server.listen(8888,"127.0.0.1",function(){
	console.log("已开启");
});