let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
input = input.map(el => el.trim());
let myCards = input[1].split(' ');
let dummyCards = input[3].split(' ');

const map = new Map();
myCards.forEach((ele) => {
  if (map.has(ele)) { map.set(ele, map.get(ele) + 1) } else { map.set(ele, 1) }
})
let result = [];

dummyCards.forEach((ele) => {
  if (map.has(ele)) { result.push(map.get(ele)) } else { result.push(0) }
})


console.log(result.join(' '));