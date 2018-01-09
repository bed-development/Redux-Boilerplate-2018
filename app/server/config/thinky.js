const config = require('./config');

const thinky = require('thinky')(config.db);
const uniqid = require('uniqid');

thinky.uniqid = uniqid;

module.exports = thinky;