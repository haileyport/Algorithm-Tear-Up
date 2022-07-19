const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(Number);

function solution(arr) {
  // 두 자연수 A B 가 있을때

  let stack = [];

  arr.map((num) => {
    let remainder = 0;

    // 나머지 구하기

    remainder = num % 42;

    stack.push(remainder);
  });
  // 중복제거
  stack = [...new Set(stack)];

  console.log(stack.length);
}

solution(input);
