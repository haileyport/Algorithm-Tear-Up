// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
let a = Number(input[0]), b = Number(input[1]), v = Number(input[2]);
const movePerDay = a-b;
const height = v-b;
console.log(Math.ceil(height/movePerDay));