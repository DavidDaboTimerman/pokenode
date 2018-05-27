const Conversation = require('../models/conversationRowModel');

const getConversation = (req) => {

  return Conversation.find( { name: req.params.name } ) 
};

module.exports = {
  getConversation,
};
