class Type {
  constructor(name, hitBonus, damageBonus) {
    this.name = name;
    this.hitBonus = hitBonus;
    this.damageBonus = damageBonus;
  }

  getName() {
    return this.name;
  }

  getHitBonus() {
    return this.hitBonus;
  }

  getDamageBonus() {
    return this.damageBonus;
  }
}

module.exports = Type;
