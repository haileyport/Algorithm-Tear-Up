let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let numbers = input[1].split(' ').map(x=> Number(x));

let max = numbers[0]; 
let min = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
