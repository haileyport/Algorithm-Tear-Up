const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input[0];
const copied = input.splice(1);
const arr = new Array(copied.length);

copied.map((item, i) => (arr[i] = item));

const array = copied.map((item) => item.split(' '));

// input 배열이 두개만 들어오는게 아니었음

function solution(T, arr) {
  let result = [];

  arr.map((el) => {
    // el[0] = 반복되는 숫자 , el[1]은 배열
    el[0] = Number(el[0]);
    el[1] = el[1].split('');

    // el[1]의 배열을 요소마다 el[0]의 숫자만큼 반복한 배열을 string 타입 으로 변경
    const repeatedStr = el[1].map((item) => item.repeat(el[0])).join('');

    result.push(repeatedStr);
  });

  // '\n' 으로 join 해서 한줄에 하나씩 출력
  console.log(result.join('\n'));
}

solution(T, array);
