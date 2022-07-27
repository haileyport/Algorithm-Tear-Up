let input = require('fs').readFileSync('/dev/stdin').toString().trim()

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let el of croatia) {
    input = input.split(el).join('*');
}
console.log(input.length);