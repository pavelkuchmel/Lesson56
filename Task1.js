let  monster = {
    name: "monster",
    hp: 100,
    gold: 22
}

//let jsonMonster = JSON.stringify(monster);
//console.log(jsonMonster);

/*let sword = {
    damage: 100,
}

let warrior = {
    name: "arthur",
    hp: 2000,
    weapon: "sword"
}*/

/*sword.master = warrior;
warrior.weapon = sword;*/

//let jsonWarrior = JSON.stringify(warrior);
//console.log(jsonWarrior);

let backPack1 = {
    stationary: false,
    undfnd: undefined,
    content : [
        sword = {
        name : "excalibur",
        damage: 54
        },
        armor = {
        name: "dragon",
        armor: 30,
        def: 88
        }
    ],
    toJSON(){
        let strJson = '{"stationary":false,"undfnd":';
        if (this.undfnd === undefined){
            strJson += '"NOT",';
        }
        else {
            strJson += '"{$this.undfnd}",';
        }
        strJson += '"content":[{"name":"excalibur","damage":54},{"name":"dragon","armor":30,"def":88}]}';
        return strJson;
    }
}

let backPack3 = '{"stationary":false,"content":[{"name":"excalibur","damage":54},{"name":"dragon","armor":30,"def":88}]}'

let chest = {
    stationary: true,
    content: [
        boots = {
            name: "dragon",
            armor: 100,
            def: 14,
        },
        helmet = {
            name: "rock",
            armor: 100,
            def: 18
        }
    ]
}

function checkStationary(key, value){
    if (key === "stationary" && value === true){
        return undefined;
    }
    return value;
}

let backPackJSON = JSON.stringify(backPack1);

console.log(JSON.parse(backPackJSON));