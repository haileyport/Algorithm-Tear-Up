const fs = require('fs');
const [nums, ...strings] = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const [nums, ...strings] = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let result = 0;

const N = Number(nums.split(' ')[0]);

const referenceStr = new Set(strings.slice(0, N))
const checkStr = strings.slice(N);

for (const str of checkStr) {
  if (referenceStr.has(str)) result++;
}

console.log(result);