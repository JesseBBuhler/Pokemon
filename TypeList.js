const Type = require("./Type.js");

const TypeList = [];

TypeList.push(new Type("Wood", "Water", "Earth"));
TypeList.push(new Type("Earth", "Fire", "Water"));
TypeList.push(new Type("Water", "Metal", "Fire"));
TypeList.push(new Type("Fire", "Wood", "Metal"));
TypeList.push(new Type("Metal", "Earth", "Wood"));

module.exports = TypeList;
