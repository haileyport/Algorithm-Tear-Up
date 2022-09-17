let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = input.shift().trim().split(' ')[0];
input = input.map(el => el.trim());
let result = [];
let nPeople = new Set(input.slice(0, N));
let mPeople = new Set(input.slice(N));
mPeople.forEach((el) => {
  if (nPeople.has(el)) result.push(el);
})
result.sort();
console.log(result.length + '\n' + result.join('\n'));