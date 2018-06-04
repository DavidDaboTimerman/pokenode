const mongoose = require('../libs/dbConnection');
const DialogLineSchema = require('./schema/DialogLineSchema');

const DialogLineModel = mongoose.model('dialogLine', DialogLineSchema);

module.exports = DialogLineModel;
