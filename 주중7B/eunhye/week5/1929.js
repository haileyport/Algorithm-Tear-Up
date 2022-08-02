//소수 구하기

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split(" ").map(Number);

//소수인지 판단
//sqrt 사용하기

const range = (start, end) => {
  return Array.from(Array(end - start + 1).keys()).map((el, idx) => {
    return start + idx;
  });
};

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

const num = range(input[0], input[1]);

const answer = num.filter((el) => {
  if (isPrime(el)) return el;
});

let ans = "";
for (i = 0; i < answer.length; i++) {
  ans += `${answer[i]}\n`;
}

console.log(ans);
