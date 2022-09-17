let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')[0];
let result = new Set();
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    let sliced = input.slice(i, j + 1);
    result.add(sliced);
  }
}
console.log(result.size);