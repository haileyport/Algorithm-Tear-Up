let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const n = input.shift().split(" ").map(Number)[0];
console.log(n);
input = input.map((i) => i.trim());
const list = input.slice(0, n);
const candidate = input.slice(n);
const set = new Set(list);

let answer = 0;
candidate.forEach((str) => {
  if (set.has(str)) answer++;
});

console.log(answer);