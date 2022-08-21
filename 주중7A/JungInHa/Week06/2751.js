const fs = require('fs');
const [N, ...input] = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.sort(function(a, b) {
  return a - b;
});

console.log(input.join('\n'))