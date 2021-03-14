var express = require('express');
var cors = require("cors");

//Middleware
var parser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var app = express();
var http = require('http').Server(app);
var router = require('./routes.js');
var db = require('./db/gameSchema');

//logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT"
}

app.use(cors(corsOptions));

app.use(express.static(__dirname + '/../client'));
app.use('/api', router);

//Setting port and listen
var port = 3080;
http.listen(port, function(){
  console.log('Listening on port:' + port);
});



module.exports.app = app;