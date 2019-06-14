var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();

var app = express();
var port = process.env.PORT || 3000;

 var mongoHost = process.env.MONGO_HOST || '127.0.0.1';
 var mongoPort = process.env.MONGO_PORT || 27017;
 var mongoUser = process.env.MONGO_USER;
 var mongoPassword = process.env.MONGO_PASSWORD;
 var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
//var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

 var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.status(200).render('madlibContainer');
});

app.get('/previous', function(req, res, next) {
  var collection = db.collection('wordType');
  collection.find({}).toArray(function (err, wordType) {
	if (err) {
	  res.status(500).send({
		error: "Error fetching people from DB"
	});
   } else {
	  console.log("=== wordType: ", wordType);
	   res.status(200).render('previous', {
		wordType: wordType
	});
   }
 });
   // res.status(200).render("previous");
});

/*app.get('save.html', function(req, res, next){
	res.status(200);


app.get('*', function(req, res){
  res.status(404);
  res.render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});*/


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
