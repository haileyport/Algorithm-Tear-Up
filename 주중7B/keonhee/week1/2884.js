const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = input.map((num) => Number(num));

let [H, M] = input;

function solution(H, M) {
  M -= 45;

  if (M < 0) {
    M += 60;
    H -= 1;
  }

  if (H < 0) {
    H = 23;
  }

  console.log(H, M);
}

solution(H, M);
