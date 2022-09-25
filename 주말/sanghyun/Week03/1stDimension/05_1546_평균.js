let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./05_1546.txt').toString().trim().split('\n');

let extracted = input[1].split(' ').map(el => Number(el));
let sortedExtracted = extracted.sort((a, b) => a - b);
let highestNumber = sortedExtracted.slice(-1)
let modification = sortedExtracted.map(el => el / highestNumber * 100);
let newAverage = modification.reduce((a, b) => a + b)
console.log(newAverage/extracted.length);
