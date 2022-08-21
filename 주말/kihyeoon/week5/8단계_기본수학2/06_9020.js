const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split("\n");

let TC = +input[0];
let prime = [];

console.log(sol(TC).trim());

function sol(TC) {
  let answer = "";

  let testcase = 1;
  makePrime();

  while (TC--) {
    let n = +input[testcase++];
    let diff = Infinity;
    let a, b;

    for (let i = 0; i < prime.length; i++) {
      let sum = prime[i];
      for (let j = i; j < prime.length; j++) {
        if (sum + prime[j] > n) break;
        if (sum + prime[j] === n) {
          if (prime[j] - prime[i] < diff) {
            a = prime[i];
            b = prime[j];
          }
        }
      }
    }
    answer += `${a} ${b}\n`;
  }
  return answer;
}

function makePrime() {
  for (let i = 2; i <= 10000; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) prime.push(i);
  }
}
