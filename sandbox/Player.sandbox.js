const Player = require("../Player");
const MonsterList = require("../MonsterList");

const player = new Player("Bob");
console.log(`Player getName: ${player.getName()}`);

function listMonsterNames(monsters) {
  for (let i = 0; i < monsters.length; i++) {
    console.log(`Monster ${i}: ${monsters[i].getName()}`);
  }
}

for (let i = 0; i < 4; i++) {
  console.log(`Add Monster ${i}: ${player.addMonster(MonsterList[i])}`);
  listMonsterNames(player.listMonsters());
}

console.log("Before damage");
listMonsterNames(player.listActiveMonsters());
console.log("After damage");
player.listMonsters()[0].takeDamage(100);
listMonsterNames(player.listActiveMonsters());

player.moveMonsterToFront(2);
console.log("After move");
listMonsterNames(player.listMonsters());
console.log("First monster should be EarthAccuracy");
