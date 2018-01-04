const colors = require('colors');
const exec = require('child_process').exec;

const Promise = require('bluebird');

const models = require('../models');

const FName = models.FName;
const LName = models.LName;

const FNames = require("./fnames");
const LNames = require("./lnames");

saveToFName(FNames).then((test)=>{
    console.log("Done loading");
    FName.run().then((results)=>{
        console.log (results.length + " first names after load.".blue);
    });
})

function saveToFName(array){
    return new Promise((resolve, reject)=>{
        let next = array.shift();
        if (next){
            FName.filter({name: next.name}).run().then((results)=>{
                if (results.length == 0){
                    let newName = new FName({
                        name: next.name,
                        sex: next.sex
                    })
                    newName.saveAll().then((result)=>{
                        if (array.length > 0){
                            saveToFName(array);
                        }
                        else {
                            console.log("GOT HERE");
                            resolve(true);
                        }
                    });
                }
                else {
                    console.log("Entry " + next.name + " found!".yellow);
                    if (array.length > 0){
                        saveToFName(array);
                    }
                    else {
                        console.log("GOT HERE2");
                        console.log(resolve());
                        resolve(true);
                    }
                }
            });
        }
    });
}