const AttackList = require("./AttackList");
const Attack = require("./Attack");
const Monster = require("./Monster");
const Type = require("./Type");
const TypeList = require("./TypeList");

wood = new Monster(TypeList[0], 30, 10, AttackList, "Wood Monster");
earth = new Monster(TypeList[1], 30, 10, AttackList, "Earth Monster");
water = new Monster(TypeList[2], 30, 10, AttackList, "Water Monster");
fire = new Monster(TypeList[3], 30, 10, AttackList, "Fire Monster");
metal = new Monster(TypeList[4], 30, 10, AttackList, "Metal Monster");

for (let i = 0; i < AttackList.length; i++) {
  console.log(`
  ${i}: \n
        rollAttack: ${AttackList[i].rollAttack()}\n
        rollDamage: ${AttackList[i].rollDamage()}\n
        calcDamage: ${AttackList[i].calcDamage(earth)}\n 
  `);
}
