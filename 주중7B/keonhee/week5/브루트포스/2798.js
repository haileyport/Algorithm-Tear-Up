const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

function solution(N, M, cards) {
  // 블랙잭 게임
  // 카드의 합이 21을 넘지 않는 한도 내에서 카드의 합을 최대한 크게 만드는것.
  // 제한된 시간 안에 3장의 카드를 골라야한다.
  // 플레이어가 고른 카드의 값이 M을 넘지 않으면서 최대한 가깝게 만들어야함
  // M 에 가장 가까운 최댓값을 구하라.  출력값은 M 이거나 작음

  let maxNum = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = cards[i] + cards[j] + cards[k];

        // M 보다 작거나 같은 최댓값, sum 재할당
        if (sum > maxNum && sum <= M) {
          maxNum = sum;
        }
      }
    }
  }

  console.log(maxNum);
}

solution(N, M, arr);
