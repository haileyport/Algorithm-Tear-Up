let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = +input[0];
let arr = input[1].split(' ').map(Number);
let newArr = [];

arr.forEach(el => {
    newArr.push(el/Math.max(...arr)*100);
});

console.log(newArr.reduce((a, b) => a+b)/n);