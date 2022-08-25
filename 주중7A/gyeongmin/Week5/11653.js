let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = [];
for (let i = 2; i <= input; i++) {
  while (input % i === 0) {
    input = input / i;
    result.push(i);
  }
}

console.log(result.join("\n"));
