var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 80 : 3000;

app.use(express.static(__dirname + '/public'));


app.get('*',function(req, res, next){
	fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
		res.send(text);
	});
});

app.listen(port,function(){
	console.log('SetLife: Server runing on port ' + port)
});