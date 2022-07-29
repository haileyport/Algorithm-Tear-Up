let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ');

let num1 = parseInt(input[0]);
let num2 = parseInt(input[1]);
let num3 = parseInt(input[2]);

if (num1 === num2 && num2 === num3) {
  console.log(10000 + num1 * 1000);
} else if (num1 === num2 || num1 === num3) {
  console.log(1000 + num1 * 100);
} else if (num2 === num3) {
  console.log(1000 + num2 * 100);
} else {
  let maxNum = Math.max(num1, num2, num3);
  console.log(maxNum * 100);
}