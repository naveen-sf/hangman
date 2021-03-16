var router = require('express').Router();
var controller = require('./controller');

router.get('/game-states', controller.gameStates.getAllGames)

router.get('/game-states/:email', controller.gameStates.getGameState)

router.post('/game', controller.createAndUpdate.createNewGame)

router.put('/game/:id', controller.createAndUpdate.updateGame)


module.exports = router;