let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./09_2438.txt').toString().split(' ');

let num = Number(input[0])
let result = ''
function solution (numToUse){
  for (let i = 1; i <= numToUse; i++){
    result += '*'.repeat(i) + '\n';
  }
}

solution(num);
console.log(result);