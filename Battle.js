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

class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winner = "none";
  }

  runBattle() {
    // initializing turn order
    let offence = this.player1;
    let deffence = this.player2;

    //starting game loop
    while (this.winner == "none") {
      //if the offensive player cannot act then the defensive player wins.
      if (!offence.canAct()) {
        this.winner = deffence.name;
      } else {
        //the deffence recieves the effect of offence's turn.
        deffence.recieveEvent(offence.takeTurn());

        //change turn
        let placeHolder = offence;
        offence = deffence;
        deffence = placeHolder;
      }
    }

    //declaring winner
    console.log(`Battle Resultes: ${this.winner} won.`);
  }
}

module.exports = Battle;
