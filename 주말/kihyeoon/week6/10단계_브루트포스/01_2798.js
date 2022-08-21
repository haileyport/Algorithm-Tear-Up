const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "01_2798.txt")
  .toString()
  .trim()
  .split("\n");

const firstLine = input[0].split(" ").map(Number);
const secondLine = input[1].split(" ").map(Number);

const n = firstLine[0];
const m = firstLine[1];

let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = secondLine[i] + secondLine[j] + secondLine[k];
      if (sum > max && sum <= m) {
        max = sum;
      }

      if (max === m) {
        break;
      }
    }
  }
}

console.log(max);
