const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const coordinates = input[1].split(' ');
let result = [];

let uniqArr = [...new Set(coordinates)].sort((a, b) => {
  return Number(a) - Number(b);
});

let uniqObj = {};
uniqArr.forEach((item, idx) => uniqObj[item] = idx);

coordinates.map((n) => {
  result.push(uniqObj[n])
});

console.log(result.join(' '));