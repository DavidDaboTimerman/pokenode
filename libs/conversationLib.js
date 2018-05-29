const Conversation = require('../models/conversationRowModel');

const getConversationRow = (req) => {
  const where = req.params;
  return Conversation.findOne(where);
};

module.exports = {
  getConversationRow,
};
 