const fs = require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//5
//20 10 35 30 7

const length= Number(input[0]) //5
const num = input[1].split(' ').map(x=>Number(x))// [20 10 35 30 7]

console.log(`${Math.min.apply(null,num)} ${Math.max.apply(null,num)}`);

