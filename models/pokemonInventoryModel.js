const mongoose = require('../libs/dbConnection');

const pokemonInventory = mongoose.Schema({
  playerId : { type: mongoose.Schema.Types.ObjectId, ref: 'players' },
  pokemonId: { type: mongoose.Schema.Types.ObjectId, ref: 'pokemons' }
});

const pokemonInventory = mongoose.model('pokemonInventory', pokemonInventory);

module.exports = pokemonInventory;
