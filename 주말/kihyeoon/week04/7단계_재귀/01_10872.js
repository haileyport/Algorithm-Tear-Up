let input = require("fs").readFileSync("01_10872.txt").toString();

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(input));
