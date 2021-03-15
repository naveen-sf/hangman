// external imports
const mongoose = require("mongoose");

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