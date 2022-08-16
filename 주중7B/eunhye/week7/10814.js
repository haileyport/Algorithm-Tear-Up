//나이순 정렬

//정렬 기준: 나이 증가 순, 나이가 같으면 먼저 가입한 사람이 앞으로
//입력은 가입한 순

const fs = require("fs");
const raw = fs.readFileSync("text.txt", "utf8");
let input = raw.trim().split("\n");
const count = input.shift();

input = input
  .map((el) => el.trim().split(" "))
  .sort((a, b) => {
    a[0] = Number(a[0]);
    b[0] = Number(b[0]);
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
  })
  .map((el) => {
    return el.join(" ");
  });

console.log(input.join("\n"));
