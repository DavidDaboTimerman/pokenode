const mongoose = require('../libs/dbConnection');

const pokemonSchema = mongoose.Schema({
  name: {
    type  : String,
    unique: true,
  },
  level: {
    type   : Number,
    min    : 1,
    default: 1,
  },
  health: {
    type   : Number,
    min    : 0,
    max    : 100,
    default: 100,
  },
});

const pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = pokemon;
