let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('./05_2741.txt').toString().split(' ');

let num = Number(input[0])
let result = ''
function solution (numToUse){
  for (let i = 1; i < numToUse + 1; i++){
    result += i + '\n';
  }
}

solution(num);
console.log(result);