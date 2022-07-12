const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [input1, input2] = input[0].split(' ').map((item) => Number(item));
const arr = input[1].split(' ').map((item) => Number(item));

function solution(input2, arr) {
  const result = [];

  arr.map((num) => {
    // 주어진 정수 보다 작은 수들을 result 에 push()
    if (input2 > num) {
      result.push(num);
    }
  });

  // 공백을 기준으로한 문자열로 출력을 해야 하기 때문에 join(' ') 사용
  console.log(result.join(' '));
}

solution(input2, arr);
