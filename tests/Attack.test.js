const Attack = require("../Attack");

attack = new Attack("Water", 4, 5, 6, "Mummy");

test("Attack getters return constructor values", () => {
  expect(attack.getName()).toBe("Mummy");
  expect(attack.getType()).toBe("Water");
  expect(attack.getDamagePlus()).toBe(5);
  expect(attack.getHitPlus()).toBe(4);
  expect(attack.getDamageDie()).toBe(6);
});

test("Attack.setType sets type", () => {
  attack.setType("Fire");
  expect(attack.getType()).toBe("Fire");
});
