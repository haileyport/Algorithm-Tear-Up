const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0];

function solution(str) {
  let result = '';
  // 배열에 알파벳을 할당시켜준다.

  // length 26의 배열 생성후 알파벳 할당시킨다.
  const array = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65).toLowerCase());

  str = str.split('');

  array.map((cha) => {
    // indexOf 는 찾는 첫번째 인덱스만 출력 없으면 -1
    result += `${str.indexOf(cha)} `;
  });

  console.log(result);
}

solution(input);
