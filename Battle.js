/**
 * The battle class handles a battle interaction between two players.
 *
 * The battle controls who's turn it is.  It recieves player status and
 * then requests a player action.
 *
 * It relays that actions effects to the next player, switchs the turn,
 * and then restarts the loop if a winner has not been determined.
 *
 * When one player has no remaining battle actions they lose the battle.
 *
 */

const prompt = require("prompt-sync")();

class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winner = "none";
    this.dieSize;
  }

  rollDie(dieSize = this.dieSzie) {
    return Math.floor(Math.random() * dieSize) + 1;
  }

  rollMod(dieSize = this.dieSize, modifier = 0, advantage = false) {
    let roll = this.rollDie(dieSize);
    if (advantage) {
      roll2 = this.rollDie(dieSize);
      if (roll2 > roll) {
        roll = roll2;
      }
    }

    return roll + modifier;
  }

  //calculate if attack hits monster and how much damage the attack does.  Monster then takes that damage.
  strike(attack, monster) {
    let advantage = attack.getType().hitBonus() == monster.getType().getName();
    attackRoll = this.rollMod(this.dieSize, attack.getHitPlus(), advantage);
    if (attackRoll >= monster.getAc()) {
      damageRole = 0;
      advantage =
        attack.getType().getDamageBonus() == monster.getType().getName();
      damageRoll = this.rollMod(
        attack.getDamageDie(),
        attack.getDamagePlus(),
        advantage
      );
      monster.takeDamage(damageRole);
    }
  }

  getStats(player) {
    let statString = `${player.getName()}:`;
    let activeMonsters = player.activeMonsters;

    for (let i = 0; i < activeMonsters.length; i++) {
      statString += ` ${activeMonsters[i].getName()}-
      ${activeMonsters[i].getHp()}${i == activeMonsters.length ? "" : ","}`;
    }
    return statString;
  }

  battleSituation() {
    //current monsters of each player and those monsters' health
    /**
     * Player 1: Monster-23, Monster-10, Monster-45, Monster-16, Monster-12
     * Player 2: Monster-23, Monster-45, Monster-16, Monster-12
     */
    let battleString =
      this.getStats(this.player1) + "\n" + this.getStats(this.player2) + "\n";

    return battleString;
  }

  promptPlayerAction(player) {
    if (player.listActiveMonsters().length == 0) {
      return null;
    }

    let attackOptions = player.listActiveMonsters()[0].listAttacks();

    console.log("Available Actions:");
    for (let i = 0; i <= attackOptions.length; i++) {
      if (i == attackOptions.length) {
        console.log(`${i + 1}: Resign`);
      }
      console.log(`${i + 1}: ${attackOptions[i].getName()}`);
    }
    let playerActionIndex = prompt(
      "Enter the number of the action you would like to take."
    );
    if (playerActionIndex - 1 == attackOptions.length) {
      return null;
    }

    return attackOptions[playerActionIndex - 1];
  }

  runBattle() {
    // initializing turn order
    let offence = this.player1;
    let deffence = this.player2;

    //starting game loop
    while (this.winner == "none") {
      //prompt the player for their action
      let playerAction = this.promptPlayerActions(offence);

      //if the offensive player cannot act, or resigns then the defensive player wins.
      if (!playerAction) {
        this.winner = deffence.getName();
      } else {
        this.strike(playerAction, deffence.listActiveMonsters[0]);

        //change turn
        let placeHolder = offence;
        offence = deffence;
        deffence = placeHolder;
      }
    }

    //declaring winner
    console.log(`Battle Results: ${this.winner} won.`);
  }
}

module.exports = Battle;
