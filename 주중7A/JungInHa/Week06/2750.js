const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift();

input.sort(function(a, b) {
  return a - b;
});

input.forEach(element => console.log(element));