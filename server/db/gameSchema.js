var mongoose = require('mongoose');


//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var GamesSchema = new mongoose.Schema({
  //UPDATE SCHEMA FOR NEW bits and pieces! 
  secretWord: [{}],
  missesAllowed: Number,
  letters: [{}],
  lost: Boolean,
  win: Boolean,
  fullWord: String,
  email: String,
  definition: String
}, {timestamps: true})

module.exports = mongoose.model('Game', GamesSchema);