class Player {
  constructor(name) {
    this.monsters = [];
    this.name = name;
  }

  addMonster(monster) {
    if (this.monsters.length >= 6) {
      return false;
    }

    this.monsters.push(monster);
    return true;
  }

  listMonsters() {
    return this.monsters;
  }

  moveMonsterToFront(index) {
    if (index >= this.monsters.length || index < 0) {
      return false;
    }

    let monster = this.monsters[index];

    this.monsters.splice(index, 1);

    this.monsters.unshift(monster);
    return true;
  }

  listActiveMonsters() {
    let activeMonsters = [];
    for (let i = 0; i < this.monsters.length; i++) {
      if (this.monsters[i].getIsAlive()) {
        activeMonsters.push(this.monsters[i]);
      }
    }
    return activeMonsters;
  }

  removeMonster(index) {
    if (index >= this.monsters.length || index < 0) {
      return false;
    }

    this.monsters.splice(index, 1);
    return true;
  }
}

module.exports = Player;
