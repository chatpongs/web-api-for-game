var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res, next){
  res.send('Hello /');
});

app.get('/test', function(req, res, next){
  res.send('Hello Test');
});

app.get('/course/:name', function(req, res, next){
  res.send('Hello Course ' + req.params.name);
});

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});