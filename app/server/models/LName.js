const thinky = require('../config/thinky');
const uniqid = require('uniqid');
const r = thinky.r;
const type = thinky.type;

const LName = thinky.createModel('LName', {
    name: type.string()
});

LName.ensureIndex("name");

module.exports = LName;