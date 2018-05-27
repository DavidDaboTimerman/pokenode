const express = require('express');
const Conversation = require('../libs/conversationLib');
const wrap    = require('../libs/wrap');

const router = express.Router();

router.get('/:name', wrap(Conversation.getConversation));

module.exports = router;
