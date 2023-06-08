const Attack = require("./Attack.js");

const AttackList = [];
const base = 3;
const mod = 2;

AttackList.push(
  new Attack("none", base + mod, base - mod, base - mod, "precise")
);
AttackList.push(
  new Attack("none", base - mod, base + mod, base - mod, "solid")
);
AttackList.push(new Attack("none", base - mod, base - mod, base + mod, "wild"));
AttackList.push(new Attack("none", base, base, base - mod, "controled"));
AttackList.push(new Attack("none", base, base - mod, base, "normal"));
AttackList.push(new Attack("none", base - mod, base, base, "risky"));

module.exports = AttackList;
