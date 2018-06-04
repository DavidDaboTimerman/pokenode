const mongoose = require('../libs/dbConnection');
const LinkSchema = require('./schema/LinkSchema');

const Link = mongoose.model('link', LinkSchema);

module.exports = Link;
