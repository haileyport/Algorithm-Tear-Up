//듣보잡

const fs = require("fs");
const input = fs
  .readFileSync("text.txt")
  .toString()
  .split("\n")
  .map((el) => el.trim());

const info = input.shift().split(" ").map(Number);
//듣도 못한 info[0]
//보도 못한 info[1]

const listen = new Set(input.slice(0, info[0]));
const see = new Set(input.slice(info[0]));

const intersection = new Set([...listen].filter((el) => see.has(el)));

const ans = [...intersection].sort();
console.log(`${ans.length}\n${ans.join("\n")}`);
