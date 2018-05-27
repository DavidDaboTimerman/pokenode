const mongoose         = require('mongoose');
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

module.exports = mongoose;