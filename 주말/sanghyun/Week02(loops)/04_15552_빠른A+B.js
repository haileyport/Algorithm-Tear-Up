let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./04_15552.txt').toString().split('\n');

let result = ''
let numberLoop = Number(input[0]);
for (let i = 1; i < numberLoop+1; i++){
  numbersToUSe = input[i].split(' ');
  result += (Number(numbersToUSe[0]) + Number(numbersToUSe[1]) + "\n") 
}
console.log(result);