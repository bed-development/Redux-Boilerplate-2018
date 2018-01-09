
const fnlist = require("./fname");
const lnlist = require("./lname");
const traits = require("./traits");

const Generate = {
    RandomPerson: function(isBoy){
        let sex = "boy";
        if (!isBoy){
            let num = getRandomInt(2);
            if (num == 0){
                sex = "boy";
            }
            else {
                sex = "girl";
            }
        }

        let fname = fnlist[getRandomInt(fnlist.length)];
        while (fname.sex != sex){
            fname = fnlist[getRandomInt(fnlist.length)];
        }

        let lname = lnlist[getRandomInt(lnlist.length)];

        let tobj = {
            appearance: {
                eyes: traits.appearance.eyes[getRandomInt(traits.appearance.eyes.length)],
                hair: traits.appearance.hair[getRandomInt(traits.appearance.hair.length)],
                age: getAfter(traits.appearance.age, "teen"),
                other: []
            },
            personality:{
                other: []
            }
        }

        for (let i = 0; i < getRandomInt(2) + 1; i++){
            let oitem = traits.appearance.other[getRandomInt(traits.appearance.other.length)];
            for(let j = 0; j < tobj.appearance.other.length; j++){
                if (tobj.appearance.other[j] == oitem){
                    oitem = null;
                    break;
                }
            }
            if (oitem){
                tobj.appearance.other.push(oitem);
            }
        }

        for (let i = 0; i < getRandomInt(4) + 1; i++){
            let pitem = traits.personality.other[getRandomInt(traits.personality.other.length)];
            for(let j = 0; j < tobj.personality.other.length; j++){
                if (tobj.personality.other[j] == pitem){
                    pitem = null;
                    break;
                }
            }
            if (pitem){
                tobj.personality.other.push(pitem);
            }
            
        }

        return {fname: fname.name, lname: lname.name, sex: fname.sex, traits: tobj};
    } 
}

function getBefore(list, value){
    let num = list.indexOf(value) + 1;
    let result = list[getRandomInt(num)];
    console.log(result);
    return result;
}

function getAfter(list, value){
    let low = list.indexOf(value) + 1;
    let num = list.length - low;
    let index = getRandomInt(num);
    console.log(index);
    console.log(low + index);
    let result = list[low + index];
    console.log(result);
    return result;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = Generate;