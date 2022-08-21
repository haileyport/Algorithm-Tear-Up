let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('./09_2438.txt').toString().split(' ');
// padStart??

let num = input[0]
// console.log(num);
let plusFirstNum = num[0]
let result = ''
function solution (numToUse){
  for (let i = 1; i <= numToUse; i++){
    let inst = numToUse - i;
    result += ' '.repeat(inst) + '*'.repeat(i) + '\n';
  }
}

solution(num);
console.log(result);