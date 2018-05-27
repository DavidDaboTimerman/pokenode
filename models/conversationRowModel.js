const mongoose = require('../libs/dbConnection');

const conversationRowSchema = mongoose.Schema({
  text: {
    type  : String,
    unique: true,
  },
  orderNumber: {
    type: Number,
  },
  nextYes: {
    type: Number,
  },
  nextNo: {
    type: Number,
  }
});

const conversationRow = mongoose.model('conversationRow', conversationRowSchema);

module.exports = conversationRow;