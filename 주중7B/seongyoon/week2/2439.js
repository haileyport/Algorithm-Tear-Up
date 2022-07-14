let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let N = Number(input[0]);
let result = '';

for (let i=1; i<=input[0]; i+=1) {
    result += ' '.repeat(N-i)+'*'.repeat(i)+'\n';
}
console.log(result);