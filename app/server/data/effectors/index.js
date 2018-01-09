const Helper = require("../helper");

const Person = Helper.Models.Person;
const Family = Helper.Models.Family

let Marriage = function(){

}

Marriage.prototype.prepare = ()=>{
    Helper.GetRandomFamily().then((family)=>{
        this.family = family;
        this.patriarch = family.patriarch;

        Helper.GetRandomPerson({sex:"girl", sameAge:this.patriarch.age}).then((matriarch)=>{
            this.matriarch = matriarch;
        })
    });
}

Marriage.prototype.validate = ()=>{
    if (!family || !patriarch || !matriarch){
        return false;
    }
    
    return true;
}

Marriage.prototype.execute = ()=>{
    this.prepare();
    if (!this.validate()){
        return false;
    }

    console.log("MARRIAGE! Adding " + this.matriarch.name + " to family of " + this.family.name);
    this.family.matriarch = this.matriarch;

    //Add Relationship stuff to people
    this.family.saveAll();

    return true;
}


module.exports = {
    Marriage: Marriage
}