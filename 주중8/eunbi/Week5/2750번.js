// 백준 2750번, 수 정렬하기
// 브론즈 2 / 10496 KB/ 204ms

let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString( ).trim().split('\n');
input.shift();

input.sort((a, b) => a - b);
input.forEach(el => console.log(el));
