let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let num = Number(input);
let output = 0;

for (let i = 1; i <= num; i++) {
  output=output+i;
}
console.log(output)