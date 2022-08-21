const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split("\n");

//a이상 b이하라고 한다면
let a = Number(input[0]);
let b = Number(input[1]);
let primeNumbers = [];
let sum = 0;

for (let target = a; target <= b; target++) {
  for (let p = 2; p <= target; p++) {
    if (p * p > target) {
      primeNumbers.push(target);
      sum += target;
      break;
    }
    if (target % p === 0) {
      break;
    }
  }
}
if (primeNumbers.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(primeNumbers[0]);
}
