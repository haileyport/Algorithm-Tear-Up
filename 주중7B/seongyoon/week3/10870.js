let input = require('fs').readFileSync('/dev/stdin').toString();

let n = +input;

function f(x) {
    if (x===0) {
       return 0;
    } else if (x===1) {
        return 1;
    }
    return f(x-1) + f(x-2);
}
console.log(f(n));