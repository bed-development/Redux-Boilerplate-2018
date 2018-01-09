// Example model
const thinky = require('../config/thinky');
const Person = require('./person');
const type = thinky.type;

let Family = thinky.createModel('Family', {
  id: {_type: String, default: function(){return thinky.uniqid()}},
  name: type.string(),
  matriarchId: type.string(),
  patriarchId: type.string()
});

Family.ensureIndex("id");
Family.ensureIndex("name");

module.exports = Family;

Family.hasOne(Person, "matriarch", "matriarchId", "id");
Family.hasOne(Person, "patriarch", "patriarchId", "id");
Family.hasAndBelongsToMany(Person, "members", "id", "id");

// example on how to add relations
// var Comment = require('./comment');
// Article.hasMany(Comment, 'comments', 'id', 'article_id');