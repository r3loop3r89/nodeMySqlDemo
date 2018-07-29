var express = require('express');
var mySql = require('mysql');
var app = express();

var connection = mySql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
  }
);

connection.connect(function(error){
  if(!!error){
    console.log('Error');
  }else{
    console.log('Connected');
  }
});

app.get('/', function(req, res){
  connection.query("SELECT * FROM MYTABLE", function(error, rows, fields){
    if (!!error) {
      console.log("error");
    }else{
      console.log("query successfull");
      res.json(rows);
    }
  });
})

app.listen(1337);
