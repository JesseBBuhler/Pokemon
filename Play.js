const Player = require("./Player.js");
const Battle = require("./Battle.js");
const MonsterList = require("./MonsterList.js");

const player1 = new Player("Player1");
const player2 = new Player("Player2");

//assign players random monsters
for (let i = 0; i < 6; i++) {
  player1.addMonster(MonsterList[Math.floor(Math.random() * 25)]);
  player2.addMonster(MonsterList[Math.floor(Math.random() * 25)]);
}

const battle = new Battle(player1, player2);
console.log(`${battle.runBattle().getName()} won the battle.`);
