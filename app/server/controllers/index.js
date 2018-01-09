const Promise = require('bluebird');
const express = require('express');
const router = express.Router();
const apiRouter = require('./routers/api');

const Generate = require('../data');
const Effectors = require("../data/effectors");

const Marriage = Effectors.Marriage;

const Models = require("../models");

const Person = Models.Person;
const Family = Models.Family;

module.exports = function (app) {

  let marriage = new Marriage();

  Family.getJoin({patriarch: true, matriarch: true}).then((families)=>{
    console.log("FAMILY");
    for(let i = 0; i < families.length;i++){
      let f = families[i];
      console.log("---");
      if (f.patriarch){
        console.log("Father: " + f.patriarch.name);
      }
      if (f.matriarch){
        console.log("Mother: " + f.matriarch.name);
      }
      console.log(f.name);
      console.log("---");
    }
  });

  /*
  (new Promise((resolve, reject)=>{

    let newP = [];

    for (let i = 0; i < 10; i++){
      let person = Generate.RandomPerson();

      let p = new Person({
        name: person.fname,
        sex: person.sex,
        traits: person.traits
      });
  
      Family.filter({name: person.lname}).run().then((results)=>{
        let f;

        if (results.length > 0){
          f = results[0];
          f.members.push(p);
        }
        else {
          f = new Family({
            name: person.lname
          });

          if (person.sex == "boy"){
            f.patriarchId = p.id;
          }
          else {
            f.matriarchId = p.id;
          }
        }
  
        
        newP.push(p.saveAll());
        newP.push(f.saveAll());
      });
    }

    Promise.all(newP).then((results)=>{
      resolve(results);
    });
  })).then((results)=>{
    Family.getJoin({matriarch:true, patriarch:true}).run().then((results)=>{
      for (let i = 0; i < results.length;i++){
        let f = results[i];

        console.log(f);
      }
    })
  });*/

  app.use('/api', apiRouter);
  app.use('/', router);
};

router.get('/*', (req, res)=>{
  res.render('index', {title:"Test Title"});
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}