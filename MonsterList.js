const AttackSets = require("./AttackSets");
const Monster = require("./Monster");
const TypeList = require("./TypeList");

const MonsterList = [];
const maxHp = 30;
const ac = 10;
const Wood = TypeList[0];
const Earth = TypeList[1];
const Water = TypeList[2];
const Fire = TypeList[3];
const Metal = TypeList[4];

function createMonster(name, attackSet, type) {
  const newMonster = new Monster(type, maxHp, ac, name);
  newMonster.addAttackSet(attackSet);
  MonsterList.push(newMonster);
}

createMonster("WoodAccuracy", AttackSets.SpecializeHitPlus, Wood);
createMonster("WaterAccuracy", AttackSets.SpecializeHitPlus, Water);
createMonster("EarthAccuracy", AttackSets.SpecializeHitPlus, Earth);
createMonster("FireAccuracy", AttackSets.SpecializeHitPlus, Fire);
createMonster("MetalAccuracy", AttackSets.SpecializeHitPlus, Metal);

createMonster("WoodDamagePotential", AttackSets.SpecializeDamageDie, Wood);
createMonster("WaterDamagePotential", AttackSets.SpecializeDamageDie, Water);
createMonster("EarthDamagePotential", AttackSets.SpecializeDamageDie, Earth);
createMonster("FireDamagePotential", AttackSets.SpecializeDamageDie, Fire);
createMonster("MetalDamagePotential", AttackSets.SpecializeDamageDie, Metal);

createMonster("WoodDamageBase", AttackSets.SpecializeDamagePlus, Wood);
createMonster("WaterDamageBase", AttackSets.SpecializeDamagePlus, Water);
createMonster("EarthDamageBase", AttackSets.SpecializeDamagePlus, Earth);
createMonster("FireDamageBase", AttackSets.SpecializeDamagePlus, Fire);
createMonster("MetalDamageBase", AttackSets.SpecializeDamagePlus, Metal);

createMonster("WoodBalanced", AttackSets.GeneralizeEdges, Wood);
createMonster("WaterBalanced", AttackSets.GeneralizeEdges, Water);
createMonster("EarthBalanced", AttackSets.GeneralizeEdges, Earth);
createMonster("FireBalanced", AttackSets.GeneralizeEdges, Fire);
createMonster("MetalBalanced", AttackSets.GeneralizeEdges, Metal);

createMonster("WoodAverage", AttackSets.GeneralizeMiddle, Wood);
createMonster("WaterAverage", AttackSets.GeneralizeMiddle, Water);
createMonster("EarthAverage", AttackSets.GeneralizeMiddle, Earth);
createMonster("FireAverage", AttackSets.GeneralizeMiddle, Fire);
createMonster("MetalAverage", AttackSets.GeneralizeMiddle, Metal);

module.exports = MonsterList;
