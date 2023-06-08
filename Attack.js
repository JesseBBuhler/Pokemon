class Attack {
  constructor(type, hitPlus, damagePlus, damageDie, name) {
    this.type = type;
    this.damagePlus = damagePlus;
    this.hitPlus = hitPlus;
    this.damageDie = damageDie;
    this.name = name;
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
    return this.damagePlus;
  }

  getHitPlus() {
    return this.hitPlus;
  }

  getDamageDie() {
    return this.damageDie;
  }
}

module.exports = Attack;
