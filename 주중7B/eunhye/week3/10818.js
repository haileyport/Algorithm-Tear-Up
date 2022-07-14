//최소, 최대

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const list = input[1].split(" ").map(Number);

const max = Math.max(...list);
const min = Math.min(...list);

console.log(`${min} ${max}`);
