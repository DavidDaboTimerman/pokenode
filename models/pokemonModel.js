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

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  level: {
    type: Number,
    min: 1,
    default: 1,
  },
  health: {
    type: Number,
    min: 0,
    max: 100,
    default: 100,
  },
});

const pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = pokemon;
