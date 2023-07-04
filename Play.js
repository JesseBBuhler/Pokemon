const Player = require("./Player.js");
const Battle = require("./Battle.js");
const MonsterList = require("./MonsterList.js");

function uniqueRandomNumbers(uniqueValues, max, min = 0) {
  let uniqueValuesList = [];

  while (uniqueValuesList.length < uniqueValues) {
    let numInList = false;
    let newNum = Math.floor(Math.random() * (max - min)) + min;
    for (let i = 0; i < uniqueValuesList.length; i++) {
      if (newNum == uniqueValuesList[i]) {
        numInList = true;
      }
    }

    if (!numInList) {
      uniqueValuesList.push(newNum);
    }
  }

  return uniqueValuesList;
}

const player1 = new Player("Player1");
const player2 = new Player("Player2");
const monsterIndexList = uniqueRandomNumbers(12, 25);

for (let i = 0; i < monsterIndexList.length; i++) {
  i < 6
    ? player1.addMonster(MonsterList[monsterIndexList[i]])
    : player2.addMonster(MonsterList[monsterIndexList[i]]);
}

console.clear();

const battle = new Battle(player1, player2);
console.log(`${battle.runBattle().getName()} won the battle.`);
