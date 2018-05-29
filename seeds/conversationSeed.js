const mongoose = require('../libs/dbConnection')
const ConversationModel = require('../models/conversationRowModel');
ConversationModel.collection.drop();

ConversationModel.create([{
    conversationName:`first`,
    text: `hi david`,
    orderNumber:1,
    nextYes:0,
    nextNo:0,
  },
  {
    conversationName:`first`,
    text: `want more`,
    orderNumber:2,
    nextYes:3,
    nextNo:4,
  },{
    conversationName:`first`,
    text: `great! bye`,
    orderNumber:3,
    nextYes:false,
    nextNo:false,
  },{
    conversationName:`first`,
    text: `too bad...`,
    orderNumber:4,
    nextYes:false,
    nextNo:false,
  },
  ])
  .then(conversation => {
    console.log(`${conversation.length} conversation created`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });