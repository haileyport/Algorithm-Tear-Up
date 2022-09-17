//소수찾기

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n");
const numbers = input[1].split(" ").map(Number);

//소수인지 판단
//3보다 큰 수를 2로 나눴을때 나눠지면 아님
//3이상의 수를 3으로 나눴을 때 나눠지면 아님

const isPrime = (el) => {
  if (el <= 1) {
    return false;
  }

  const sqrt = parseInt(Math.sqrt(el));

  for (n = 2; n <= sqrt; n++) {
    if (el % n === 0) {
      return false;
    }
  }
  return true;
};

const answer = numbers.filter((el) => {
  if (isPrime(el)) return el;
});

console.log(answer.length);
