// Example model
const thinky = require('../config/thinky');
const r = thinky.r;
const type = thinky.type;

let Person = thinky.createModel('Person', {
  id: {_type: String, default: function(){return thinky.uniqid()}},
  name: type.string(),
  sex: type.string(),
  traits: type.object().allowExtra(true)
});

Person.ensureIndex("id");
Person.ensureIndex("sex");

module.exports = Person;

// example on how to add relations
// var Comment = require('./comment');
// Article.hasMany(Comment, 'comments', 'id', 'article_id');