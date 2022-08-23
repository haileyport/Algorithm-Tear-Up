const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let result = [];

const unheardNum = Number(input[0].split(' ')[0]);
const unseenNum = Number(input[0].split(' ')[1]);
const unheard = new Set(input.slice(1, unheardNum + 1));
const unseen = new Set(input.slice(unheardNum + 1));

const longer = (unheardNum >= unseenNum) ? unheard : unseen;
const shorter = (unheardNum < unseenNum) ? unheard : unseen;

longer.forEach(el => {
  if (shorter.has(el)) result.push(el);
})

result.sort();

console.log(result.length)
console.log(result.join('\n'))