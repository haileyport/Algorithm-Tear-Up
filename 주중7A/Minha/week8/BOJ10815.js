let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
input = input.map(el => el.trim());
let myCards = new Set(input[1].split(' '));
let dummyCards = input[3].split(' ');
let result = '';
for (let i = 0; i < dummyCards.length; i++) {
  myCards.has(dummyCards[i]) ? result += '1 ' : result += '0 ';
}
console.log(result);