// Example model
const thinky = require('../config/thinky');
const uniqid = require('uniqid');
const r = thinky.r;
const type = thinky.type;

let FName = thinky.createModel('FName', {
  name: type.string(),
  sex: type.string()
});

FName.ensureIndex("name");

module.exports = FName;

// example on how to add relations
// var Comment = require('./comment');
// Article.hasMany(Comment, 'comments', 'id', 'article_id');