const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', () => {
  throw new Error('Connection Error');
});
db.once('open', () => {
  // we're connected!
});

const pokemonInventory = mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'players' },
  pokemonId: { type: mongoose.Schema.Types.ObjectId, ref: 'pokemons' }
});

const pokemonInventory = mongoose.model('pokemonInventory', pokemonInventory);

module.exports = pokemonInventory;
