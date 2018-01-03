const FNames = require('./FNames');
const Promise = require('bluebird');

const models = require('../models');
const r = require('../config/thinky').r;
const FName = models.FName;

module.exports = function(){
    console.log("Loading Names");
    
    let batch = [];
    for (let i = 0; i < FNames.length; i++){
        let fnd = FNames[i];
        
        let fname = new FName({
            name: fnd.name,
            sex: fnd.sex
        });

        batch.push(fname);     
    }
    
    let rec = batch.shift()
    saveRecord(batch, rec).then(()=>{
        console.log("COMPLETED SAVING!");
    })
}

function saveRecord(array, rec){
    return new Promise((resolve, reject)=>{
        console.log(array.length + " records left");
        FName.filter({name: rec.name}).run().then((results)=>{
            if (results.length == 0){
                rec.saveAll().then((result)=>{
                    let newRec = array.shift();
                    if (newRec){
                        saveRecord(array, newRec);
                    }
                });
            }
            else {
                let newRec = array.shift();
                if (newRec){
                    saveRecord(array, newRec);
                }
            }
        });
    });
}

function saveBlock(array){
    console.log("SAVEBLOCK");
    console.log(array.length);
    return new Promise((resolve, reject)=>{
        try{
            for(let i = 0; i < array.length; i++){
                let item = array[i];
                item.saveAll().then((result)=>{
                    console.log("SAVED ONE");
                });
            }

            console.log("Saved batch of " + i);
            resolve();
        }
        catch(err){
            reject(err);
        }
    });
}