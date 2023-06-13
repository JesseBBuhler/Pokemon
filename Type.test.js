const Type = require("./Type");

type = new Type("Water", "Fire", "Earth");

test("type getters return constructor values", () => {
  expect(type.getName()).toBe("Water");
  expect(type.getHitBonus()).toBe("Fire");
  expect(type.getDamageBonus()).toBe("Earth");
});
