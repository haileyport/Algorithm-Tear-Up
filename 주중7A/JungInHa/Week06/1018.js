const fs = require('fs');
const [N, M, ...board] = fs.readFileSync('./input.txt').toString().trim().split(/\s/);
// const [N, M, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split(/\s/);

const chess = ["WBWBWBWB", "BWBWBWBW"];
let min = 64; // 모든 칸을 색칠할 경우

// 8 * 8 로 자를 수 있을 때까지만 8 * 8로 자른다
for (let i = 0; i <= N - 8; i++) { 
  for (let j = 0; j <= M - 8; j++) { 

    // 흰색/검은색이 먼저인 경우를 각각 검사한다 (0: 흰 먼저, 1: 검 먼저)
    for (let start = 0; start < 2; start++) {
      let count = 0;
 
      for (let x = i; x < i + 8; x++) { // 자른 판의 i번째줄
        for (let y = j; y < j + 8; y++) { // j번째칸
          if (board[x][y] !== chess[(x + start) % 2][y - j]) {
            count++; // 다르면 칠해야 하는 수 + 1
          }
        }
      }
      if (min > count) min = count; // 더 작은 수로 업데이트
    }
  }
}

console.log(min)