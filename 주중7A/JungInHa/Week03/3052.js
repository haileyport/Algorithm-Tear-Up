// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 
// 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
// 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let leftOvers = [];
let differentNums = [];

for (let i = 0; i < input.length; i++) {
  let number = parseInt(input[i])
  leftOvers[i] = number % 42;
}

for (let j = 0; j < leftOvers.length; j++) {
  if (!differentNums.includes(leftOvers[j])) {
    differentNums.push(leftOvers[j]);
  }
}

console.log(differentNums.length)