// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const s = require('fs').readFileSync('./input.txt').toString().trim().split('\n')[0];
const alphabets = Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
let result = alphabets.map(function (c) {
  return s.indexOf(c);
});

console.log(result.join(" "))