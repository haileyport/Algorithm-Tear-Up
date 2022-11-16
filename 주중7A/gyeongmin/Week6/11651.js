let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()

function x(input) {
    let x = input.map(el => el.split(' ')).sort((a, b) => a[0] - b[0]);
    return x.map(el => el.join(' '));
}

function y(input) {
    let y = input.map(el => el.split(' ')).sort((a, b) => a[1] - b[1]);
    return y.map(el => el.join(' ')).join('\n');
}

console.log(y(x(input)))
