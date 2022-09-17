// 0보다 크거나 같은 정수 N이 주어진다.
// 이때, N!을 출력하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("../ex.txt").toString().trim();

let result = 1;

// for (let i = 2; i <= Number(input); i++) {
//   result = result * i;
// }

// console.log(result);

function factorial(n) {
  if (n > 0) {
    result = n * factorial(n - 1);
  }

  return result;
}

console.log(factorial(Number(input)));
