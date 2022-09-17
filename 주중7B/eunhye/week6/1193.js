// 분수찾기
// 스터디 중 도움받은 코드

const fs = require("fs");
const input = +fs.readFileSync("text.txt").toString().trim();

const solution = (input) => {
  // 대각선 지그재그로 번호
  let x = 1;
  let y = 1;
  let line = 2; // 홀짝
  let count = 1; // 주어진 숫자 전까지 반복하기 위한 카운트
  let start = 0; // 대각선 끝에 닿을 때를 체크하기 위한 변수

  while (count < input) {
    if (start > 1) {
      // x나 y가 1이라면 대각선 줄 바꿈
      line++;
      start = 0;
    }

    // x,y가 (1,1)일 경우
    if (x === 1 && y === 1) {
      y++;
      count++;
      continue;
    } else if (x === 1 || y === 1) {
      // 1/1이 아니면서 x 혹은 y에 1이 포함될 때
      start++;
    }

    if (line % 2 === 0) {
      // 대각선 줄이 짝수일 경우
      x++;
      y = y === 1 ? y : y - 1;
    } else {
      // 대각선 줄이 홀수일 경우
      x = x === 1 ? x : x - 1;
      y++;
    }

    count++;
  }

  console.log(`${x}/${y}`);
};

solution(input);
