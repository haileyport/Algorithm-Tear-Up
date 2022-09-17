const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let result = '';

const cards = new Set(input[1].split(' '))
const checkCards = new Set(input[3].split(' '))

checkCards.forEach(card => {
  let isIncluded = (cards.has(card)) ? 1 : 0;
  result += isIncluded + ' ';
})

console.log(result);