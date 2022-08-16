//좌표 정렬하기2

const fs = require("fs");
const raw = fs.readFileSync("text.txt", "utf8");
let input = raw.trim().split("\n");
const count = input.shift();

//좌표 설정
input = input.map((el) => {
  el = el.trim().split(" ").map(Number);
  return el;
});

//y좌표가 증가하는 순으로, y가 같으면 x를 증가하는 순으로 정렬한 다음 출력

input.sort((a, b) => {
  if (a[1] > b[1]) {
    return 1;
  } else if (a[1] < b[1]) {
    return -1;
  } else {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
  }
});

input = input.map((el) => el.join(" ")).join("\n");
console.log(input);
