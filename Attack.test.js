const AttackList = require("./AttackList");
const Attack = require("./Attack");
const Monster = require("./Monster");
const Type = require("./Type");
const TypeList = require("./TypeList");

console.log("Before Manipulation");
console.log(AttackList);
monster = new Monster(TypeList[0], 30, 10, AttackList, "My Monster");

console.log("Manipulated Array");
console.log(monster.listAttacks());

console.log("Original Array");
console.log(AttackList);
