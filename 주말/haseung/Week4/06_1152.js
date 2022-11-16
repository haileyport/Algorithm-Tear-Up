const inputs = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ");

console.log(inputs[0] === "" ? 0 : inputs.length);
