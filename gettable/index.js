var express = require('express');
var app = express();
var fs = require('fs');


var server = app.listen(8888, function () {
  console.log('服务器已开启,端口号是8888');
});


app.get('/',function (req, res) {
  fs.readFile("index.html","utf-8",function(err, data){
    res.send(data);
  })
})


app.get('/data', function (req, res) {
  fs.readFile("fruit.json",function(err,data){
    res.write(data);
    res.send();
  })
});

