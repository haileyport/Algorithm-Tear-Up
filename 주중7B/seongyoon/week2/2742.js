let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let N = Number(input[0]);
let result = '';
for (let i=N; i>=1; i-=1) {
    result += `${i}\n`;
}
console.log(result);