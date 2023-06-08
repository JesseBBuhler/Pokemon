const Monster = require("./Monster.js");
const Attack = require("./Attack.js");

// monster = new Monster("water", 1, 10, 10);

// myAttack = new Attack("water", 2, 3, 10);

// console.log(monster.getHp());

// monster.takeDamage(myAttack.calcDamage(monster));

// console.log(monster.getHp());
// console.log(monster.getIsAlive());

// monster.takeDamage(myAttack.calcDamage(monster));

// console.log(monster.getHp());
// console.log(monster.getIsAlive());

let attackList = [];

//big attack
attackList.push(new Attack("water", 5, 2, 6, "Big Attack"));
//precise attack
attackList.push(new Attack("water", 3, 5, 4, "Precise Attack"));
//wild attack
attackList.push(new Attack("water", 6, 0, 8, "Wild Attack"));

monster = new Monster(15, 10, attackList);
other = new Monster(15, 10, attackList);

// for (let i = 0; i < monster.listAttacks.length; i++) {
//   console.log(monster.getAttack(i).getName());
// }

console.log(other.getHp());
let damage = monster.getAttack(0).calcDamage(other);
console.log(damage);
other.takeDamage(damage);
console.log(other.getHp());
