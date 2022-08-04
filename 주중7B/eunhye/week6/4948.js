//베르트랑 공준

//1:57~2:15

//n에 대하여 n보다 크고 2n보다 작거나 같은 소수는 적어도 하나 존재한다

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n").map(Number);

const isPrime = (el) => {
  if (el === 1) {
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

for (i = 0; i < input.length - 1; i++) {
  const n = input[i];
  const nn = input[i] * 2;
  let arr = Array(nn - n + 1)
    .fill()
    .map((obj, idx) => {
      return n + idx;
    });
  arr = arr.filter((el) => {
    if (isPrime(el) && el > n) return isPrime(el);
  });
  console.log(arr.length);
}
