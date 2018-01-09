const thinky = require('../config/thinky');
const uniqid = require('uniqid');
const r = thinky.r;
const type = thinky.type;

const FName = thinky.createModel('FName', {
    name: type.string(),
    sex: type.string()
});

FName.ensureIndex("name");
FName.ensureIndex("sex");

module.exports = FName;