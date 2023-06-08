class Attack {
  constructor(type, hitPlus, damagePlus, damageDie, name) {
    this.type = type;
    this.damagePlus = damagePlus;
    this.hitPlus = hitPlus;
    this.damageDie = damageDie;
    this.name = name;
  }

  rollAttack() {
    const DieSize = 20;
    return Math.floor(Math.random() * DieSize) + this.hitPlus + 1; // roll must be at least 1
  }

  rollDamage() {
    let totalDamage = 0;
    totalDamage =
      Math.floor(Math.random() * this.damageDie) + this.damagePlus + 1; // roll must be at least 1
    totalDamage < 0 ? (totalDamage = 0) : (totalDamage = totalDamage); // damage cannot be less than 0;
    return totalDamage;
  }

  calcDamage(monster) {
    let damageRoll = 0;
    let attackRoll = this.rollAttack();
    if (this.type.getHitBonus() == monster.getType().getName()) {
      let advantage = this.rollAttack();
      if (advantage > attackRoll) {
        attackRoll = advantage;
      }
    }
    // console.log(`Attack Accuracy: ${attackRoll}`);
    if (attackRoll >= monster.getAc()) {
      console.log("Attack hit!");
      damageRoll = this.rollDamage();
      if (this.type.getDamageBonus() == monster.getType().getName()) {
        let advantage = this.rollDamage();
        if (advantage > damageRoll) {
          damageRoll = advantage;
        }
      }
    } else {
      console.log("Attack missed!");
    }
    console.log(`Total Damage: ${damageRoll}`);
    return damageRoll;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getDamagePlus() {
    return this.getDamagePlus;
  }

  getHitPlus() {
    return this.hitPlus;
  }

  getDamageDie() {
    return this.damageDie;
  }
}

module.exports = Attack;
