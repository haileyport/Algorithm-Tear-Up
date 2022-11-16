// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
// 첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.
// 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 원래 수로 돌아올 때까지 위 과정을 반복한다. 
// 첫째 줄에 N의 사이클 길이를 출력한다.

// 사이클 횟수에 +1 한다.
// 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만든다.
// 각 자리의 숫자를 구해서 더한다. 
// 수의 가장 오른쪽 자리 수와 구한 합의 가장 오른쪽 자리 수를 이어 붙여 새로운 수를 만든다.
// 새로운 수가 주어진 수와 같다면 반복을 종료하고 사이클의 길이를 출력한다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

let N = parseInt(input[0]); 

let num = N;
let count = 0;

while (true) {
  count++;

  if ( num < 10 ) {
    num = '0' + num;
  }

  let numFirst = Math.floor(num / 10);
  let numLast = num % 10;

  let sum = numFirst + numLast;
  let sumLast = sum % 10;

  num = (numLast * 10) + sumLast;

  if ( num === N ) {
    break;
  }
}

console.log(count);

