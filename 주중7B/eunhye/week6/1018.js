//체스판 다시 칠하기

const fs = require("fs");
let [n, m, ...board] = fs
  .readFileSync("text.txt", "utf8")
  .toString()
  .trim()
  .split(/\s/);

board = board.filter((el) => {
  return el.length > 0;
});

const lines = ["WBWBWBWB", "BWBWBWBW"];
let min = 64;
for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    for (let oe = 0; oe < 2; oe++) {
      let count = 0;
      for (let x = i; x < i + 8; x++) {
        for (let y = j; y < j + 8; y++) {
          if (board[x][y] !== lines[(x + oe) % 2][y - j]) {
            count++;
          }
        }
      }
      if (min > count) min = count;
    }
  }
}
console.log(min);

//풀이 참고 https://tesseractjh.tistory.com/41
