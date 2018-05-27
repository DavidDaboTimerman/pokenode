const mongoose = require('../libs/dbConnection');

const conversationSchema = mongoose.Schema({
  name: {
    type  : String,
    unique: true,
  },
});

const conversation = mongoose.model('players', conversationSchema);

module.exports = conversation;
