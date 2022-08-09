const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);