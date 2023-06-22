const Attack = require("./Attack.js");

const AttackList = [];
const hitPlusBase = 3;
const hitPlusMod = 2;
const damagePlusBase = 2;
const damagePlusMod = 2;
const smallDie = 4;
const normalDie = 6;
const largeDie = 8;

AttackList.push(
  new Attack(
    "none",
    hitPlusBase + hitPlusMod,
    damagePlusBase - damagePlusMod,
    smallDie,
    "precise"
  )
);
AttackList.push(
  new Attack(
    "none",
    hitPlusBase - hitPlusMod,
    damagePlusBase + damagePlusMod,
    smallDie,
    "solid"
  )
);
AttackList.push(
  new Attack(
    "none",
    hitPlusBase - hitPlusMod,
    damagePlusBase - damagePlusMod,
    largeDie,
    "wild"
  )
);
AttackList.push(
  new Attack("none", hitPlusBase, damagePlusBase, smallDie, "controled")
);
AttackList.push(
  new Attack(
    "none",
    hitPlusBase,
    damagePlusBase - damagePlusMod,
    normalDie,
    "normal"
  )
);
AttackList.push(
  new Attack(
    "none",
    hitPlusBase - hitPlusMod,
    damagePlusBase,
    normalDie,
    "risky"
  )
);

module.exports = AttackList;
