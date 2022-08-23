let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let toNumbers = input.map((i) =>Number(i));
let max = Math.max(...toNumbers);
let index = input.indexOf(String(max));
console.log(max);
console.log(index+1)