// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 
// 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
// 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const N = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  let numbers = String(i).split('');

  if (i > 99) {
    for (let j = 0; j < numbers.length - 2; j++) {
      let diff1 = parseInt(numbers[j]) - parseInt(numbers[j+1]);
      let diff2 = parseInt(numbers[j+1]) - parseInt(numbers[j+2]);
      if (diff1 === diff2) {
        count++
      } else {
        break
      }
    }
  } else {
    count++;
  }
}

console.log(count);

