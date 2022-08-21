const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const length = +input[0];
const arr = input.slice(1).map((el) => el.split(' ').map(Number));

function solution(arr) {
  // 2차원 배열 정렬
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  arr.map((el) => console.log(el.join(' ')));
}

solution(arr);
