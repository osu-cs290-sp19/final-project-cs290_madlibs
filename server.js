var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res, next){
  res.status(200);
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('save.html', req, res, next) {
	res.status(200);
	res.sendFile(path.join(__dirname + '/public/save.html'));
});

app.get('*', function(req, res){
  res.status(404);
  res.sendFile(path.join(__dirname + '/public/404.html'))
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
