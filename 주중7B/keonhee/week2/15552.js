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

  let result = '';

  for (let i = 0; i < T; i++) {
    // T 의 수 만큼 반복해서 A B 값 접근
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;

    // 이번 문제에서는 console.log() 를 여러개 사용해서 출력하면 시간초과가 나기 때문에 '\n' 사용 개행해서 출력한다.

    result += `${A + B}${'\n'}`;
  }

  console.log(result);
}

solution(+input[0], testCaseArray);
