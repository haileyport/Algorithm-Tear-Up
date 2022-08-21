let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString( ).trim().split('\n');
// trim()때문에 처음에 틀렸다고 나옴 ㅠ 꼭 붙이자! 

//백준 11022번, A+B - 8
// 브론즈 5, 9392 KB, 128ms 

// 두 정수 A, B 입력받아 A + B 출력 
// 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. 
// ex) Case #1: 1 + 1 = 2

let result = '';
let ele = (input.slice(1)).map(el => el.split(' ').map(el => parseInt(el)));

let n = 1;
ele.forEach(el => {
  result += `Case #${n}: ${el[0]} + ${el[1]} = ${el[0] + el[1]} \n`
  n++;
})

console.log(result);