const input = require("fs").readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "03_1193.txt"
);
let number = Number(input);
let value = 1;
while (true) {
  number -= value;
  if (number <= 0) {
    number += value;
    break;
  }
  value++;
}

if (value % 2 === 1) {
  console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
} else {
  console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
}
