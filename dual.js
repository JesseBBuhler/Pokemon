const Monster = require("./Monster.js");
const Attack = require("./Attack.js");
const prompt = require("prompt-sync")();

console.clear();
const player1 = prompt("What is player-1's name? ");
console.log(`Welcome to the game ${player1}!`);
const player2 = prompt("What is player-2's name? ");
console.log(`Welcome to the game ${player2}!`);

let attackList = [];

//precise attack  75% 5.5 = 4.125
attackList.push(new Attack("water", 5, 3, 4, "Precise Attack"));
//big attack 60% 8.5 = 5.1
attackList.push(new Attack("water", 3, 5, 6, "Big Attack"));
//wild attack 50% 10.5 = 5.25
attackList.push(new Attack("water", 0, 6, 10, "Wild Attack"));

monster1 = new Monster(30, 10, attackList, player1);
monster2 = new Monster(30, 10, attackList, player2);

let winner = "none";

let offence = monster1;
let deffence = monster2;

while (winner == "none") {
  console.clear();
  console.log(`${monster1.getName()}: ${monster1.getHp()} HP`);
  console.log(`${monster2.getName()}: ${monster2.getHp()} HP`);
  console.log("\n\n");
  //if the offensive player cannot act then the defensive player wins.
  if (!offence.getIsAlive()) {
    winner = deffence.getName();
  } else {
    //ask offence what they want to do
    console.log(
      `${offence.getName()}, you have ${
        offence.listAttacks().length
      } actions available:`
    );
    for (let i = 0; i < offence.listAttacks().length; i++) {
      console.log(`Action ${i + 1}: ${offence.getAttack(i).getName()}`);
    }
    let action = prompt(
      "Enter the number that corresponds to the action you would like to take: "
    );

    //the deffence recieves the effect of offence's turn.
    deffence.takeDamage(offence.getAttack(action - 1).calcDamage(deffence));

    prompt("Press enter to go to the next turn.");
    //change turn
    let placeHolder = offence;
    offence = deffence;
    deffence = placeHolder;
  }
  console.log(`${winner} is the winner!!!`);
}
