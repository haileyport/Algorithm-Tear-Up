// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
let testcase = input.map(v => Number(v.trim()));
testcase.pop();

let isPrime = (n) => {
  if (n === 1) return false;
  else {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
  }
  return true;
}
let result = '';
for (let i = 0; i < testcase.length; i++) {
  let n = testcase[i], count = 0;
  for (let j = n + 1; j <= 2 * n; j++)
    if (isPrime(j)) count++;
  result += (count + '\n');
}
console.log(result.trim());