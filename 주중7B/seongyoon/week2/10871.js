let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0].split(' ')[0]);
let X = parseInt(input[0].split(' ')[1]);
let A = input[1].split(' ');

let array = [];

for (let i=0; i<=N-1; i+=1) {
    if (Number(A[i])<X) {
        array.push(A[i]);
    }
}
console.log(array.join(' '));