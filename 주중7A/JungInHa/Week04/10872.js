// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
// 첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.
// 첫째 줄에 N!을 출력한다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const N = parseInt(input[0]);

function factorial(n) {
  if (n <= 1) {
    return 1
  } 
  return n * factorial(n - 1)
}

console.log(factorial(N));