const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const number = +input[0];

const details = input.slice(1).map((el) => el.split(' ').map(Number));

function solution(num, details) {
  // 키와 몸무게 비교
  const rank = [];

  for (let i = 0; i < num; i++) {
    let count = 0;
    for (let j = 0; j < num; j++) {
      if (i !== j) {
        if (details[i][0] < details[j][0] && details[i][1] < details[j][1]) {
          count++;
        }
      }
    }
    rank.push(count + 1);
  }

  // 틀림
  console.log(rank);
}

solution(number, details);
