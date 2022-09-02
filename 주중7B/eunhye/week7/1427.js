//소트인사이드

const fs = require("fs");
const input = fs.readFileSync("text.txt", "utf8").trim();

const arr = input.split("");
arr.sort((a, b) => b - a);

console.log(arr.join(""));
