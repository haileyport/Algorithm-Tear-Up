const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];

for (let i = 1; i <= input[0]; i++) {
  const tempValue = input[i].split(' ').map((num) => Number(num));

  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
  // 객체 상태로 A , B 로 푸시해준다.
}

function solution(T, testCaseArray) {
  const length = Object.entries(testCaseArray).length;
  // 위의 방법으로 접근 가능 하지만 , T 가 이미 주어짐

  for (let i = 0; i < T; i++) {
    // T 의 수 만큼 반복해서 A B 값 접근
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;

    console.log(`Case #${i + 1}: ${A + B}`);
  }
}

solution(+input[0], testCaseArray);
