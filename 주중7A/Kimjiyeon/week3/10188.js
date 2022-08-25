let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = input[1].toString().split(" ");
let toNumbers = number.map((i) =>Number(i));

let max = Math.max(...toNumbers);
let min = Math.min(...toNumbers);

console.log(min+" "+max);