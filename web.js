var express = require('express');
var app = express.createServer(express.logger());

var var fs = require('fs');
var content1 = fs.readFileSync('~/bitstarter/index.html', 'utf-8');

app.get('/', function(request, response) {
  response.send('Hello World2!');
//   response.send('content1');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
