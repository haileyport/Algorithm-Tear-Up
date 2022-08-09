// f(n) = f(n-1) + f(n-2) (n>=2)
// 입력 : 20보다 작거나 같은 자연수 n
// 출력 : n번째 피보나치 수

const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

// const input = 10;

function fibonazzi(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else {
    return fibonazzi(num - 2) + fibonazzi(num - 1);
  }
}

console.log(fibonazzi(input));
