const Type = require("./Type");

type = new Type("Water", "Fire", "Earth");

test("Returns the name of the type", () => {
  expect(type.getName()).toBe("Water");
});
