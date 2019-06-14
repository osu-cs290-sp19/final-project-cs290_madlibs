var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();

var app = express();
var port = process.env.PORT || 7500;

var mongoHost = process.env.MONGO_HOST || '127.0.0.1';
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

// var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var db = null;

app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.status(200).render('madlib');
});
// app.use(express.static(path.join(__dirname,'public')));

// app.get('/', function(req, res, next){
//   res.status(200);
//   res.sendFile(path.join(__dirname + '/public/index.html'));
// });
// 
// app.get('save.html', function(req, res, next){
// 	res.status(200);
// 	res.sendFile(path.join(__dirname + '/public/save.html'));
// });
// 
// app.get('*', function(req, res){
//   res.status(404);
//   res.sendFile(path.join(__dirname + '/public/404.html'))
// });

MongoClient.connect(mongoURL, { useNewUrlParser: true }, function(err, client) {
    if(err){
        throw err;
    } else {
        db = client.db(mongoDBName);
        app.listen(port, function () {
          console.log("== Server is listening on port", port);
        });
    }
});

