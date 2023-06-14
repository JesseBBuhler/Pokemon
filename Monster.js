const Attack = require("./Attack");

class Monster {
  constructor(type, maxHp, ac, attacks, name) {
    this.type = type;
    this.maxHp = maxHp;
    this.hp = maxHp;
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

  heal(amount) {
    this.hp += amount;
    if (this.hp > this.maxHp) {
      this.hp = this.maxHp;
    }
    if (this.isAlive == false) {
      this.isAlive = true;
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
