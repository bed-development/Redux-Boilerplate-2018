// Example model
const thinky = require('../config/thinky');
const uniqid = require('uniqid');
const r = thinky.r;
const type = thinky.type;

let LName = thinky.createModel('LName', {
  name: type.string()
});

LName.ensureIndex("name");

module.exports = LName;

// example on how to add relations
// var Comment = require('./comment');
// Article.hasMany(Comment, 'comments', 'id', 'article_id');