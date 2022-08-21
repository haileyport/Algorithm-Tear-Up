let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./08_10757.txt').toString().trim().split(' ');

function solution(income){
  console.log((BigInt(income[0]) + BigInt(income[1])).toString());
}
solution(input);