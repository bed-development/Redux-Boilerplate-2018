const express = require('express');
const router = express.Router();
const apiRouter = require('./routers/api');

const models = require('../models');
const r = require('../config/thinky').r;
const FName = models.FName;
const Article = models.Article;

module.exports = function (app) {
  
  //RUN ONCE TO CREATE TABLE
  //require('../data_load')();

  //console.log(getBoyNames());

  app.use('/api', apiRouter);
  app.use('/', router);
};

router.get('/*', (req, res)=>{
  res.render('index', {title:"Test Title"});
});

function getBoyNames(){
  return FName.filter({
    'sex': 'boy',
  }).run().then((names)=>{
    if (!names || names.length == 0){
      return {message:"No Boy Names Found"};
    }

    return {names};
  })
}
