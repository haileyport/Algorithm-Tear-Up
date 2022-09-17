const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(String);

function solution(A, B) {
  // 숫자를 뒤집어준다.
  A = A.split('').reverse('').join('');
  B = B.split('').reverse('').join('');

  console.log(A > B ? A : B);
}

solution(A, B);
