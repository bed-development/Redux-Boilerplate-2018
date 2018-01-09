const Promise = require("bluebird");
const Models = require("../models");

const Person = Models.Person;
const Family = Models.Family;

const Traits = require('./traits');

module.exports = {
    Models: Models,
    GetRandomPerson: (opts)=>{
        new Promise((resolve, reject)=>{
            Person.run().then((people)=>{
                let matches;

                for(let i = 0; i < people.length; i++){
                    let p = people[i];
                    let match = true;
                    if (match && opts.sex && opts.sex != p.sex){
                        match = false;
                    }
                    if (match && opts.sameAge && opts.sameAge != p.age){
                        match = false;
                    }

                    if (match){
                        matches.push(p);
                    }
                }

                let num = this.getRandomInt(matches.length);
                resolve(matches[num]);
            })
        })
    },
    GetRandomFamily: ()=>{
        new Promise((resolve, reject)=>{
            Family.getJoin({patriarchId:true}).run().then((families)=>{
                let matches = [];
                for (let i = 0; i < families.length; i++){
                    let f = families[i];
                    if (f.patriarchId && !f.matriarchId){
                        matches.push(f);
                    }
    
                    let num = this.getRandomInt(matches.length);
                    resolve(matches[num]);
                }
            });
        })
    },
    GetBefore: (list, value)=>{
        let num = list.indexOf(value) + 1;
        let result = list[getRandomInt(num)];
        return result;
    },
    GetAfter: (list, value)=>{
        let low = list.indexOf(value) + 1;
        let num = list.length - low;
        let index = getRandomInt(num);
        let result = list[low + index];
        return result;
    },
    GetRandomInt: (max)=>{
        return Math.floor(Math.random() * Math.floor(max));
    }
}