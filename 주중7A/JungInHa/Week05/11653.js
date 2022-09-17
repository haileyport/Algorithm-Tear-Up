const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
// const input = fs.readFileSync('/dev/stdin').toString().trim();

let num = Number(input);
let divider = 2; // 가장 작은 소수부터 시작

while (num > 1) {
  while (num % divider === 0) { // 나누어 떨어지지 않을 때까지 나눈다.
    console.log(divider);
    num = num / divider;
  }
  divider++; // 더이상 나눠 떨어지지 않으면 다음 수로 
}