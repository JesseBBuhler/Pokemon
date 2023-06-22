const AttackList = require("./AttackList");
const AttackSets = {
  SpecializeHitPlus: [AttackList[0], AttackList[3], AttackList[4]],
  SpecializeDamagePlus: [AttackList[1], AttackList[3], AttackList[5]],
  SpecializeDamageDie: [AttackList[2], AttackList[4], AttackList[5]],
  GeneralizeMiddle: [AttackList[3], AttackList[4], AttackList[5]],
  GeneralizeEdges: [AttackList[0], AttackList[1], AttackList[2]],
};

module.exports = AttackSets;
