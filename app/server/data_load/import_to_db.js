const Promise = require('bluebird');
const models = require('../models');
const r = require('../config/thinky').r;
const FName = models.FName;
const LName = models.LName;

const FNames = require("./fnames");
const LNames = require("./lnames");

/*
FName.run().then((results)=>{
    console.log("There are " + results.length + " first names");
})

for(let i = 0; i < FNames.length; i++){
    let fnj = FNames[i];

    FName.filter({name: fnj.name}).run().then((results)=>{
        if (results.length == 0){
            let fn = new FName({name: fnj.name, sex: fnj.sex});
            fn.saveAll().then((result)=>{
                console.log("Saved name " + result.name);
            });
        }
    });
}
*/

LName.run().then((results)=>{
    console.log("There are " + results.length + " last names");
})

for(let i = 0; i < LNames.length; i++){
    let lnj = LNames[i];

    LName.filter({name: lnj.name}).run().then((results)=>{
        console.log("RESULT");
        console.log(results);
        if (results.length == 0){
            let ln = new LName({name: fnj.name});
            ln.saveAll().then((result)=>{
                console.log("Saved name " + result.name);
            });
        }
    });
}
