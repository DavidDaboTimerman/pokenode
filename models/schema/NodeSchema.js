const mongoose = require('../../libs/dbConnection');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const LinkSchema = require('./LinkSchema');

const nodeSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  links: [{ type: ObjectId, ref: LinkSchema }],
});

module.exports = nodeSchema;
