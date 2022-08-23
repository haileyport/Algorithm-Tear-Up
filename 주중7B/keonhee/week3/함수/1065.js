const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = Number(input[0]);

function solution(num) {
  // 한수란 어떤 양의 정수 X의 각자리가 등차수열을 이룬다면
  // 등차수열이란 연속된 두 개의 수의 차이가 일정한 수열
  // 1 보다 크거나 같고, N 보다 작거나 같은 한수의 개수를 출력

  let count = 0;

  for (let i = 1; i <= num; i++) {
    // 한자리 수와 두자리 수는 모두 등차수열
    if (String(i).length < 3) {
      count++;
    }

    let splited = String(i).split('').map(Number);

    // 세자리수 부터 검증
    if (splited.length > 2) {
      let firstIndex = splited[0];
      let secondIndex = splited[1];

      let commonDifference = firstIndex - secondIndex;

      let index = 2;

      // 마지막 인덱스까지 index 늘려가면서 차이가 commonDifference 와 같을시 count++
      while (index < splited.length) {
        // console.log(splited[index - 1] - splited[index]);
        if (splited[index - 1] - splited[index] === commonDifference) {
          count++;
        }

        index++;
      }
    }
  }
  console.log(count);
}

solution(input);
