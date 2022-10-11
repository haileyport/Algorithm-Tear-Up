let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// let input = fs.readFileSync('./06_2742.txt').toString().split(' ');

let num = Number(input[0])
let result = ''
function solution (numToUse){
  for (numToUse; numToUse > 0; numToUse--){
    result += numToUse + '\n';
  }
}

solution(num);
console.log(result);