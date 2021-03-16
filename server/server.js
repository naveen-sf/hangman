var express = require('express');
var cors = require("cors");

//Middleware
var parser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var app = express();
var http = require('http').Server(app);
var router = require('./routes.js');
// require database connection
const dbConnect = require("./db/dbConnect");
const Game = require("./db/gameSchema");

// API documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// execute database connection
dbConnect();

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

app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

//Setting port and listen
const port = process.env.PORT || 3001;
http.listen(port, function(){
  console.log('Listening on port:' + port);
});



module.exports.app = app;