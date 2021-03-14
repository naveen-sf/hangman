var db = require('../db/gameSchema');

module.exports = {
  //Gets the state of all games played/in progress
  getAllGames: function (req, res) {
    db.find({}, function (error, object) {
      if (error) {
        console.log("error", error)
        res.send(404)
      } else if (object) {
        console.log('OBJECTS:', object);
        res.status(200).send(object)
      }

    })
  },
  //Gets the state of a specific game given the game id
  getGameState: function (req, res) {
     var email = req.params.email
    db.findOne({ email: email }, {}, { sort: { _id : -1 } }, function (error, object) {
      if (error) {
        console.log("error", error)
        res.send(404)
      } else if (object) {
        console.log('OBJECT:', object.guesses);
        res.status(200).send(object)
      } else if (error === null && object === null) {
        res.status(200).send(null)
      }

    })
  },

}