const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("");

input.sort(function(a, b) {
  return b - a;
})

console.log(input.join(""))