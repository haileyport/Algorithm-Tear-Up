let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('./03_8393.txt').toString().split(' ');

let numberLoop = Number(input[0]);
let result = 0;
for (let i = 1; i < numberLoop+1; i++){
  result = result + i
};
console.log(result);