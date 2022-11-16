const input = require("fs").readFileSync("../input.txt").toString().trim();

let arr = [];
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    arr.push(input.slice(i, j + 1));
  }
}

arr = [...new Set(arr)];

console.log(arr.length);
