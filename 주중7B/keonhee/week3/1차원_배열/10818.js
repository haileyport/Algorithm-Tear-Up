const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [number, array] = input;

number = Number(number);

array = array.split(' ').map(Number);

function solution(num, array) {
  // N 개의 정수가 주어진다. 최솟값과 최댓값을 구하라.

  let min = Math.min(...array);
  let max = Math.max(...array);

  console.log(min, max);
}

solution(number, array);
