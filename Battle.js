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

const prompt = require("prompt-sync")({ sigint: true });

class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winner = null;
    this.dieSize = 20;
  }

  rollDie(dieSize = this.dieSzie) {
    return Math.floor(Math.random() * dieSize) + 1;
  }

  rollMod(dieSize = this.dieSize, modifier = 0, advantage = false) {
    let roll = this.rollDie(dieSize);
    if (advantage) {
      let roll2 = this.rollDie(dieSize);
      if (roll2 > roll) {
        roll = roll2;
      }
    }

    return roll + modifier;
  }

  //calculate if attack hits monster and how much damage the attack does.  Monster then takes that damage.
  strike(attack, monster) {
    let strikeDescription = `${monster.getName()} is targeted by ${attack.getName()}\n`;
    let advantage =
      attack.getType().getHitBonus() == monster.getType().getName();
    strikeDescription += `Advantage: ${advantage}\n`;
    let attackRoll = this.rollMod(this.dieSize, attack.getHitPlus(), advantage);
    strikeDescription += `Attack Roll: ${attackRoll}\n`;

    if (attackRoll >= monster.getAc()) {
      strikeDescription += "Attack Hit!\n";
      let damageRoll = 0;
      advantage =
        attack.getType().getDamageBonus() == monster.getType().getName();
      damageRoll = this.rollMod(
        attack.getDamageDie(),
        attack.getDamagePlus(),
        advantage
      );
      monster.takeDamage(damageRoll);
      strikeDescription += `Damage taken: ${damageRoll}\n`;
    } else {
      strikeDescription += "Attack Missed!\n";
    }

    return strikeDescription;
  }

  getStats(player) {
    let statString = `${player.getName()}:\n`;
    let activeMonsters = player.listActiveMonsters();

    for (let i = 0; i < activeMonsters.length; i++) {
      statString += `${activeMonsters[i].getName()}-${activeMonsters[
        i
      ].getHp()}${i == activeMonsters.length ? "" : ","}\n`;
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

  getOptionsMenu(player) {
    let attackOptions = player.listActiveMonsters()[0].listAttacks();
    let changeMonsterIndex = attackOptions.length + 1;
    let resignIndex = attackOptions.length + 2;
    let optionsMenu = "Available Actions:\n";

    for (let i = 0; i < attackOptions.length; i++) {
      optionsMenu += `${i + 1}: ${attackOptions[i].getName()}\n`;
    }
    optionsMenu += `${changeMonsterIndex}: Change Monster\n`;
    optionsMenu += `${resignIndex}: Resign\n`;
    return optionsMenu;
  }

  getPlayerAction(player) {
    let attackOptions = player.listActiveMonsters()[0].listAttacks();
    let changeMonsterIndex = attackOptions.length + 1;
    let resignIndex = attackOptions.length + 2;

    //get valid player input
    let validOption = true;
    let playerActionIndex = -1;
    do {
      console.clear();
      console.log("_____________________________");

      console.log(this.battleSituation());

      console.log(`${validOption ? "" : "Not a valid option."}`);
      console.log(this.getOptionsMenu(player));

      playerActionIndex = prompt(
        `${player.getName()}, Enter the number of the action you would like to take.`
      );

      if (
        !isNaN(playerActionIndex) &&
        playerActionIndex > 0 &&
        playerActionIndex <= resignIndex
      ) {
        validOption = true;
      } else {
        validOption = false;
      }
    } while (!validOption);

    //return player action
    if (playerActionIndex == resignIndex) {
      return "resign";
    }

    if (playerActionIndex == changeMonsterIndex) {
      return "change monster";
    }

    return attackOptions[playerActionIndex - 1];
  }

  selectMonster(player) {
    let invalidSelection = false;
    while (true) {
      console.clear();
      if (invalidSelection) {
        console.log("That selection was invalid");
      }

      for (let i = 0; i < player.listMonsters().length; i++) {
        let monster = player.listMonsters()[i];
        console.log(
          `${i + 1}: ${monster.getName()} ${
            monster.getIsAlive() ? "" : "(dead)"
          }`
        );
      }

      let selection = prompt(
        `${player.getName()} Enter the number of the monster you would like to select.`
      );

      if (
        !isNaN(selection) &&
        selection >= 1 &&
        selection <= player.listMonsters().length &&
        player.listMonsters()[selection - 1].getIsAlive()
      ) {
        return selection - 1;
      }

      invalidSelection = true;
    }
  }

  sureChangeMonster() {
    let validInput = true;
    while (true) {
      console.clear();
      console.log(`${validInput ? "" : "That input was invalid"}`);
      console.log(
        "Are you sure you would like to change monsters? Doing so will skip your turn."
      );
      console.log(
        "(y) Yes, I'm sure\n(n) No, I would like to go back to the action menu:"
      );
      let input = prompt("(y/n):");
      if (input == "y") {
        return true;
      } else if (input == "n") {
        return false;
      } else {
        validInput = false;
      }
    }
  }

  runBattle() {
    // initializing turn order
    let offence = this.player1;
    let deffence = this.player2;

    //starting game loop
    while (true) {
      let changeTurn = true;
      //if the offense is out of monsters the deffense wins
      if (offence.listActiveMonsters().length == 0) {
        this.winner = deffence;
        return this.winner;
      }

      let playerAction = this.getPlayerAction(offence);

      //if the offense resigns the deffense wins
      if (playerAction == "resign") {
        this.winner = deffence;
        return this.winner;
      }

      if (playerAction == "change monster") {
        if (!this.sureChangeMonster()) {
          changeTurn = false;
        } else {
          offence.moveMonsterToFront(this.selectMonster(offence));
          console.log(
            `${offence.getName()} moved ${offence
              .listActiveMonsters()[0]
              .getName()} to the front.`
          );
        }
      } else {
        console.log(
          this.strike(playerAction, deffence.listActiveMonsters()[0])
        );
      }

      if (changeTurn) {
        prompt(`Press enter to end ${offence.getName()}'s turn.`);
        let placeHolder = offence;
        offence = deffence;
        deffence = placeHolder;
      }
    }
  }
}

module.exports = Battle;
