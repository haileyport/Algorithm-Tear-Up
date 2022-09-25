let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./07_11021.txt').toString().split('\n');

let result = ''
let numberLoop = Number(input[0]);
for (let i = 1; i < numberLoop+1; i++){
  numbersToUSe = input[i].split(' ');
  let sum = Number(numbersToUSe[0]) + Number(numbersToUSe[1])
  result += `Case #${i}: ${numbersToUSe[0]} + ${numbersToUSe[1]} = ${sum} \n` 
}
console.log(result);