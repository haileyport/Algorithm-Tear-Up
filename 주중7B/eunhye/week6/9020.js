//골드바흐의 추측

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n").map(Number);

input.shift();
const max = Math.max(...input); //가장 큰 TestCase
const answer = [];
let prime = new Array(max + 1).fill(true); //n까지의 수로 채워진 arr 생성
prime[0] = false;
prime[1] = false; //1이하는 prime 아님

for (let i = 2; i * i <= max + 1; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= max + 1; j += i) {
      prime[j] = false;
    }
  }
} //소수 구하기

input.forEach((v) => {
  for (let i = Math.ceil(v / 2); i > 1; i--) {
    if (prime[i] && prime[v - i]) {
      answer.push(`${i} ${v - i}`);
      break;
    }
  }
});

console.log(answer.join("\n"));
