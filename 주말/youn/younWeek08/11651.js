const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();
const coords = input.map((coord) => coord.split(' ').map(Number))

coords.sort((a,b) => {
    if(a[1] === b[1]) return a[0] - b[0];
    return a[1]-b[1];
})

let answer = '';
coords.forEach((coord) => {
    answer += coord[0] + ' ' + coord[1] + '\n'
})

console.log(answer);