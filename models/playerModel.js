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

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  pokemonInventory: {
    type: Number,
    unique: true,
  },
  itemInventory: {
    type: Number,
    unique: true,
  },
});

const players = mongoose.model('players', playerSchema);

module.exports = pokemon;
