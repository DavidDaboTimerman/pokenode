const mongoose = require('../libs/dbConnection');

const itemInventory = mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'players'
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'items'
  }
});

const player = mongoose.model('player', itemInventory);

module.exports = pokemon;