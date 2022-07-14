let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let N = Number(input[0]);
let result = '';

for (let i=1; i<=input[0]; i+=1) {
    for (let j=1; j<=i; j+=1) {
        result += '*';
    }
    result += '\n';
}
console.log(result);