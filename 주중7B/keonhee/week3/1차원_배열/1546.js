const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [input1, input2] = input;

input1 = Number(input1);

input2 = input2.split(' ').map(Number);

function solution(divider, arr) {
  let max = Math.max(...arr);

  // num 을 max 로 나누고 * 100
  let newArr = arr.map((num) => (num / max) * 100);

  let sum = newArr.reduce((a, b) => a + b);

  console.log(sum / divider);
}

solution(input1, input2);
