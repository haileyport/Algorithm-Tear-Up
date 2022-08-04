let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./02_11720.txt').toString().trim().split('\n');

let trimmer = input[1].split('');
console.log(trimmer.reduce((a, b) => Number(a) + Number(b)));
