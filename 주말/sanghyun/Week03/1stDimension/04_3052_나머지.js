let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./04_3052.txt').toString().trim().split('\n');



console.log(new Set(input.map(el => Number(el) % 42)).size);