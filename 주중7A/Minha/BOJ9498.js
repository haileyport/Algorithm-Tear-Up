const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
input = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}

