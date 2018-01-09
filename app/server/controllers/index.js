const Promise = require('bluebird');
const express = require('express');
const router = express.Router();
const apiRouter = require('./routers/api');

const Generate = require('../data');

module.exports = function (app) {

  for (let i = 0; i < 10; i++){
    let person = Generate.RandomPerson();
    console.log(JSON.stringify(person));
  }

  app.use('/api', apiRouter);
  app.use('/', router);
};

router.get('/*', (req, res)=>{
  res.render('index', {title:"Test Title"});
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}