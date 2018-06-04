const mongoose = require('../../libs/dbConnection');

const ObjectId = mongoose.SchemaTypes.ObjectId;

const DialogLineSchema = mongoose.Schema({
  text: String,
});

module.exports = DialogLineSchema;
