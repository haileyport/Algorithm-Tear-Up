const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const firstLine = input[0].split(" ")
const N = Number(firstLine[0]); // 카드수
const max = Number(firstLine[1]); // 최대 합

const cards = input[1].split(" ").map((n) => Number(n));
let result = 0;

for (let i = 0; i < N; i++) { // 첫번째 카드를 고른다
  let first = cards[i];

  for (let j = 1; j < N; j++ ) { // 두번째 카드를 고른다
    let second = cards[j]
    if (i === j) {
      continue;  // 첫번째 카드랑 같은 카드면 다음 카드로 
    }

    for (let k = 2; k < N; k++) { // 세번째 카드를 고른다
      let third = cards[k];
      if (i === k || j === k) {
        continue;  // 첫번째나 두번째 카드랑 같은 카드면 다음 카드로 
      }

      let sum = first + second + third; // 합을 구한다

      if (sum <= max) { // 합이 M을 넘지 않고
        if (max - sum < max - result) { // 현재까지의 합보다 M에 가까우면
          result = sum  // 업데이트
        }
      }
    }
  }
}

console.log(result)