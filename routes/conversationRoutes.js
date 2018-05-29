const express = require('express');
const Conversation = require('../libs/conversationLib');
const wrap    = require('../libs/wrap');

const router = express.Router();

router.get('/:conversationName', wrap(Conversation.getConversationRow));
router.get('/:conversationName/:orderNumber', wrap(Conversation.getConversationRow));

module.exports = router;
