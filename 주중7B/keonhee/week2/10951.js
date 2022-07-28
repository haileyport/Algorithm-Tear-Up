const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((arr) => arr.split(' '));
//  A , B 로 나눠서 배열로 만들어준다.
const A = input.map((arr) => Number(arr[0]));
const B = input.map((arr) => Number(arr[1]));

function solution(A, B) {
  for (let i = 0; i < A.length; i++) {
    // 조건을 잘 봐야함
    if (A[i] > 0 && B[i] < 10) {
      console.log(A[i] + B[i]);
    }
  }
}

solution(A, B);
