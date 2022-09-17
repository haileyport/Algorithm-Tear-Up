const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
// const input = fs.readFileSync('/dev/stdin').toString().trim();

let partStr = [];
const len = input.length;

for (let i = 1; i <= len; i++) {
  for (let j = 0; j < (len - i) + 1; j++) {
    partStr.push(input.slice(j, j + i));
  }
}

const result = new Set(partStr);
console.log(result.size);