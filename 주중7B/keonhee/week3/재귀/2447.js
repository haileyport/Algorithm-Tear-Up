const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

function solution(num) {
  // 재귀적인 패턴의 별 찍기, N이 3의 거듭제곱 ( 3, 9 ,27) ...
  // N 은 N * N 패턴의 정사각형

  let star3 = '***';
  let star2 = '**';

  let star = `${star3.repeat(3)}${'\n'}${star2.repeat(2)}${'\n'}${star3.repeat(3)}`;

  console.log(star + star);
}

solution(input);
