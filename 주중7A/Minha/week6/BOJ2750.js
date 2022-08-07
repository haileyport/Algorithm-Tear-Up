// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const t = input.shift();
input = input.map(i => Number(i.trim()));
input = input.sort((a,b) => a-b);
input = input.map(i => console.log(i));