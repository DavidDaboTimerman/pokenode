const mongoose = require('../libs/dbConnection');

const conversationSchema = mongoose.Schema({
  name: {
    type  : String,
    unique: true,
  },
});

const conversation = mongoose.model('conversation', conversationSchema);

module.exports = conversation;
