let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let n = Number(input[0]);
let result = 0;
for (i=1; i<=n; i+=1) {
    result += i;
}
console.log(result);