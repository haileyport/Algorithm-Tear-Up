//42로 나눴을 때 나머지를 구하는데 이것들중 다른게 몇개있는지를 구하는 것
const fs =require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
input.forEach(n => arr.indexOf(n % 42) === -1 && arr.push(n % 42))
console.log(arr.length)