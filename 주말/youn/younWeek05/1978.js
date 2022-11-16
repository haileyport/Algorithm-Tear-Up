let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(inputs[0]); //4
let nums = inputs[1].split(" ").map((v) => Number(v));
let answer = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 1) {
    continue;
  } else {
    let count = 0;
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      answer++;
    }
  }
}
console.log(answer);