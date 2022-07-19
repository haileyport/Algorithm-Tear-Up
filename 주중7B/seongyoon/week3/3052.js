let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = [];
for (i=0; i<10; i++) {
    if (!(arr.includes(Number(input[i])%42))) {
        arr.push(Number(input[i])%42);
    }
}
console.log(arr.length);