
//make it use express
var express = require( 'express');
var app = express();
//set up path for files
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});


var portDecision = process.env.PORT || 3000;

//run server
app.listen( portDecision, function(){
  console.log('sever is listening on port 3000');

});

app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));

});

//anyone can use the public folder now
app.use(express.static('public'));

//set up a route/url to go to in order to access public
app.post( '/texter', urlencodedParser, function ( req, res) {
  console.log('texter hit', req.body);
  res.send (req.body);
});

//install body-parser --save
