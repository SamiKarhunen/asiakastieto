var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));
var express = require('express')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());




 
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




app.post("/addcustomer", function (req, res) {

      var post  = {name:req.body.name, address:req.body.address, phone:req.body.phone, email:req.body.email, idnumber:req.body.idnumber};

  var query = connection.query('INSERT INTO asiakas SET ?', post, function(err, rows, fields) {
    if(err){

      console.log(err.message);
      res.redirect(303,'/');
    }else{
      console.log(JSON.stringify(rows));
      res.redirect(303,'/');

    }
  });
});
  
var server = app.listen(3000, function (req, res) {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)

    })
