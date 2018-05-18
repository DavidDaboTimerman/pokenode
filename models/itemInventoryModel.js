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

const itemInventory = mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'players' },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'items' }
});

const player = mongoose.model('player', itemInventory);

module.exports = pokemon;
