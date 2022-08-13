// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim());
}

let answer = arr.length;
let temp = '';

arr.forEach((item) => {
  temp = item[0];
  for (let i = 1; i < item.length; i++) {
    if (temp.includes(item[i]) && item[i - 1] !== item[i]) {
      answer--;
      break;
    }
    temp += item[i];
  }
});

console.log(answer);