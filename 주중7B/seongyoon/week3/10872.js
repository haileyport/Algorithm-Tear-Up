let input = require('fs').readFileSync('/dev/stdin').toString();

let n = +input;

function f(x) {
    if (x <= 1) {
       return 1;
    }
    return x * f(x-1);
}
console.log(f(n));