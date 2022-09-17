// const inputs = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const inputs = [5, 5, 4, 3, 2, 1];

inputs.shift();

let results = "";
inputs.sort((a, b) => a - b).forEach((num) => (results += `${num}\n`));

console.log(results);
