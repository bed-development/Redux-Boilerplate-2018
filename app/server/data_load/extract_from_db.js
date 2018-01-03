const Promise = require('bluebird');
const models = require('../models');
const r = require('../config/thinky').r;
const FName = models.FName;
const fs = require('fs');

let fnj = [];

let fnames = FName.run().then((results)=>{
    for (let i = 0; i < results.length; i++){
        let fnr = results[i];
        fnj.push({name: fnr.name, sex: fnr.sex});
    }

    console.log("SAVING " + fnj.length + " records to file");

    fs.writeFile('fnames.json', JSON.stringify(fnj), (err)=>{
        if (err) throw err;

        console.log("Finished Writing!");
    });
});