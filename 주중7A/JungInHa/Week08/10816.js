const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let result = [];

const cards = input[1].split(' ')
let cardsMap = new Map();

const checkCards = input[3].split(' ');

cards.map(num => {
  if (cardsMap.has(num)) {
    cardsMap.set(num, cardsMap.get(num) + 1)
  } else {cardsMap.set(num, 1)}
})

checkCards.forEach(num => {
  let count = (cardsMap.has(num)) ? cardsMap.get(num) : 0;
  result.push(count)
})

console.log(result.join(' '));