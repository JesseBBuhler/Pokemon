const Attack = require("./Attack");

class Monster {
  constructor(type, hp, ac, attacks, name) {
    this.type = type;
    this.hp = hp;
    this.ac = ac;
    this.attacks = attacks
      .slice(0)
      .map(
        (attack) =>
          new Attack(
            type,
            attack.getHitPlus(),
            attack.getDamagePlus(),
            attack.getDamageDie(),
            attack.getName()
          )
      );
    this.name = name;
    this.isAlive = true;
  }

  addAttack(attack) {
    this.attacks.push(attack);
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
      this.isAlive = false;
    }
  }

  listAttacks() {
    return this.attacks;
  }

  getAttack(index) {
    return this.attacks[index];
  }

  getType() {
    return this.type;
  }

  getAc() {
    return this.ac;
  }

  getHp() {
    return this.hp;
  }

  getName() {
    return this.name;
  }

  getIsAlive() {
    return this.isAlive;
  }
}

module.exports = Monster;
