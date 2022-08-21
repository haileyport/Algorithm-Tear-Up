// 소인수분해

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = Number(raw.trim());

// 소수랑 동일하게 진행하고 소수로 나뉘어 지면 console

const isPrime = (el) => {
  if (el <= 1) {
    return;
  }

  while (el % 2 === 0) {
    console.log(2);
    el = el / 2;
  }
  const sqrt = parseInt(Math.sqrt(el));

  for (n = 3; n <= sqrt; n += 2) {
    while (el % n === 0) {
      console.log(n);
      el = el / n;
    }
  }
  if (el > 2) {
    console.log(el);
  }
};

isPrime(input);
