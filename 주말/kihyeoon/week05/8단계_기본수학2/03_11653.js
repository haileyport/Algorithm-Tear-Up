const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split(" ");
var num = parseInt(input[0]);

var i = 2;
var primes = [];
while (true) {
  if (num % i === 0) {
    num = num / i;
    primes.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

console.log(primes.join("\n"));
