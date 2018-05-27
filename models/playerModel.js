const mongoose = require('../libs/dbConnection');

const playerSchema = mongoose.Schema({
  name: {
    type  : String,
    unique: true,
  },
  pokemonInventory: {
    type  : Number,
    unique: true,
  },
  itemInventory: {
    type  : Number,
    unique: true,
  },
});

const players = mongoose.model('players', playerSchema);

module.exports = pokemon;
