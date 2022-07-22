const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];

function solution(str) {
  // 몇개의 단어가 있을까 ?
  // 단어는 공백으로 구분
  // 한 단어가 여러번 등장하면 등장한 횟수만큼 모두 세어야함

  // 마지막에 줄바꿈이 일어나는 경우도 있어서 trim()을 사용하면 오류

  str = str.split(' ').filter((el) => {
    if (el !== '' || el !== ' ') {
      return el;
    }
  });

  console.log(str.length);
}

solution(input);
