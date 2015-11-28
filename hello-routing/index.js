var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res, next){
  res.send('Hello /');
});

app.get('/test', function(req, res, next){
  res.send('Hello Test');
});

app.get('/echo/:name', function(req, res, next){
  res.send('Hello ' + req.params.name);
});

app.get('/bento/', function(req, res, next){
  res.send('Hello Course Bento');
});

app.post('/bento/', function(req, res, next){
  var info = {
    name: 'Course Bento',
    description: 'Online course center',
    url: 'http://www.coursebento.com',
  };
  res.json(info);
});

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});