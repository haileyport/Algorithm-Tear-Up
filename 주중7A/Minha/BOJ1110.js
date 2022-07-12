// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let target = Number(input[0]);
if (target < 10) target = '0' + target;

let curr10 = Math.floor(target / 10); //2
let curr1 = target % 10; //6
let curr = '';
let count = 0;

while (target != curr) {
  curr = String(curr1) + String((curr10 + curr1) % 10); // 68 8
  curr10 = Math.floor(Number(curr) / 10); //6
  curr1 = Number(curr) % 10; //8
  console.log(curr);
  count++;
}

console.log(count);