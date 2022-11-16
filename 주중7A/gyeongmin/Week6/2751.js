let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let ascending_order = (x, y) => {return x - y}
let arr = input.sort(ascending_order)

console.log(arr.join('\n'))
