const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

// ✨ 함수 호출 전 변수 선언
const board = input.slice(1);
const yx = input[0].split(" ");
let min = Number(yx[0]) * Number(yx[1]);

for (let i = 0; i <= yx[0] - 8; i++) {
  for (let j = 0; j <= yx[1] - 8; j++) {
    check(j, i);
  }
}

function check(x, y) {
  let count = 0;
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[y][x] === "W" && board[i][j] !== white[i - y][j - x]) {
        count++;
      }
      if (board[y][x] === "B" && board[i][j] !== black[i - y][j - x]) {
        count++;
      }
    }
  }
  if (count < min) {
    min = count;
  }
}

console.log(min);

// 출처 - https://jaekwan.tistory.com/110
