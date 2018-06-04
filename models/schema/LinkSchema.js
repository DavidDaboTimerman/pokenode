const mongoose = require('../../libs/dbConnection');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const DialogLine = require('./DialogLineSchema');
const NodeSchema = require('./NodeSchema');

const LinkSchema = mongoose.Schema({
  lines: [{ type: ObjectId, ref: DialogLine }],
  nextNode: { type: ObjectId, ref: NodeSchema },
});

module.exports = LinkSchema;
