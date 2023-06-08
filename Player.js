class Player {
  constructor(Monsters, name) {
    this.Actions = Monsters;
    this.name = name;
  }

  canAct() {
    if (this.Actions.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  listActions() {
    return this.Actions;
  }

  takeTurn() {
    console.log(this.Actions);
    console.log(`${this.name} played ${this.Actions[0]}`);
    return this.Actions[0];
  }

  recieveEvent(event) {
    console.log(`${this.Actions.shift()} dies.`);
  }
}

module.exports = Player;
