let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

function isOld(input) {
    let age = input.map(el => el.split(' ')).sort((a, b) => a[0] - b[0]);
    return age.map(el => el.join(' '));
  }
console.log(isOld(input).join('\n'))
