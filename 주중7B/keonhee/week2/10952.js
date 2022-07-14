const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((arr) => arr.split(' '));
//  A , B 로 나눠서 배열로 만들어준다.
const A = input.map((arr) => Number(arr[0]));
const B = input.map((arr) => Number(arr[1]));

function solution(A, B) {
  for (let i = 0; i < A.length; i++) {
    // A ,B 가 0 인 경우는 break 로 빠져 나온다.
    if (A[i] === 0 && B[i] === 0) {
      break;
    }

    // 이외의 경우에만 출력
    console.log(A[i] + B[i]);
  }
}

solution(A, B);
