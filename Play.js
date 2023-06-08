const Player = require("./Player.js");
const Battle = require("./Battle.js");

const player1 = new Player(["Mummy"], "Player1");
const player2 = new Player(["Frankenstein's monster", "Werewolf"], "Player2");

const battle = new Battle(player1, player2);
battle.runBattle();
