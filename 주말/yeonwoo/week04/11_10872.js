const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(input));
