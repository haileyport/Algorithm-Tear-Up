let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let str =  Number(input[0]);//1
let arr = input[1].split("").map(Number);
let result = arr.reduce((acc,cur) => acc + cur);

console.log(result);