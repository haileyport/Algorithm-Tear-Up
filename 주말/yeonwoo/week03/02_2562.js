let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numbers = input.map(function (cur) {
  return Number(cur);
});

let max = numbers[0];
let maxIdx = 0;
for (let i = 1; i < 9; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
    maxIdx = i;
  }
}
console.log(max);
console.log(maxIdx + 1);
