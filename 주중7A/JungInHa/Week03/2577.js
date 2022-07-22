// 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
// 첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.
// 첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다. 
// 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 0부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.

// A * B * C 를 계산한 결과를 각각의 숫자로 나눠 배열로 저장한다. -> split 
// 0-9까지 반복하며 숫자가 배열에 있을 때마다 카운트에 1을 더한다. 
  // 카운트를 출력한다. 

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

let multiplied = A * B * C;
multiplied = String(multiplied).split('');

for (let i = 0; i <= 9; i++) {
  count = 0;

  for (let j = 0; j <= multiplied.length; j++) {
    if (multiplied[j] == i) {
      count ++
    }
  }

  console.log(count);
}