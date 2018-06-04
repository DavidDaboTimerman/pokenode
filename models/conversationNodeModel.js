const mongoose = require('../libs/dbConnection');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const nodeSchema = require('./schema/NodeSchema');

const Node = mongoose.model('node', nodeSchema);

module.exports = Node;
