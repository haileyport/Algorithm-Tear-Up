// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

[size, ...arr] = input;
[row, col] = size.split(' ');
arr = arr.map(str => str.trim('\r').split(''));

const answer = [];
const line = ['WBWBWBWB', 'BWBWBWBW'];

// i = x축 - 8
// j = y축 - 8
for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= col - 8; j++) {

    // 두 개의 경우를 생각하기 위한 for문
    for (let z = 0; z < 2; z++) {
      let count = 0;

      // 8*8 정사각형을 도는 for문
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = arr[i + x][j + y];
          if (current !== line[(x + z) % 2][y]) count++;
        }
      }
      answer.push(count);
    }
  }
}
console.log(Math.min(...answer));