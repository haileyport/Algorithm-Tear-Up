const input = require("fs").readFileSync("02_10870.txt").toString().trim();

function fibonacci(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(input));
