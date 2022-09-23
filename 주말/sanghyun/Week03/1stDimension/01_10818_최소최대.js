let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./01_10818.txt').toString().split('\n');

// console.log(input);
let sorted = input[1].split(' ').map(el => Number(el)).sort((a, b) => a - b);
console.log(`${sorted[0]} ${sorted[sorted.length - 1]}`)