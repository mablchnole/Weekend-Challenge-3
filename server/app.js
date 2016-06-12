// require express
var express=require('express');
// create a new express app
var app=express();
// require a path
var path=require('path');
// require operations module
var operations=require('../modules/operations');
// FIRST RUN: npm install body-parser --save
// this is needed for POST
var bodyParser=require('body-parser');
// don't use as extended
var urlencodedParser=bodyParser.urlencoded({extended:false});

// spin up the server
var server=app.listen(process.env.PORT || 8000, 'localhost', function(req, res){
  console.log('server is listening on port 8000');
});

// set up "public" folder for static files
app.use(express.static('public'));

// base URL
app.get('/', function(req, res){
  // main page
  res.sendFile(path.resolve('views/index.html'));
});

// post that is called by the AJAX
app.post('/calculation', urlencodedParser, function(req, res){
  // run operations function from operations module and pass in input values to calculate answer
  var answer = operations(req.body.x, req.body.type, req.body.y);
  console.log('in post: ' + answer);
  var returnAnswer = answer.toString();
  res.send(returnAnswer);
  console.log(returnAnswer);
}); // end POST
