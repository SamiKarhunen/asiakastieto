var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));
 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test1234',
  database : 'asiakastieto',
});

app.get('/', function(req, res){
res.sendFile(__dirname + '/public/asiakas.html');
});

 
 
connection.connect();  //yhdistetään mysql:n tietokantaan
 


app.get('/toka', function(req, res) {
  var strQuery = 'SELECT * FROM asiakas';
  var sendThis;
  connection.query (strQuery, function(err, rows, resp){
    console.log(rows);
    sendThis = rows
    res.send(sendThis);
  });
});



connection.ping(function (err) {
  if (err) throw err;
  console.log('Server responded to ping');
})
 





  
var server = app.listen(3000, '127.0.0.1', function () {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)

    })
