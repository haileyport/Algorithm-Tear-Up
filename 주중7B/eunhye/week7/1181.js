//단어 정렬 - 실버 5

//정렬 기준: 길이 짧은 것, 길이 같으면 사전 순으로

const fs = require("fs");
const raw = fs.readFileSync("text.txt", "utf8");
let input = raw.trim().split("\n");
const count = input.shift();

//중복 제거
input = [...new Set(input)];

input = input
  .map((el) => el.trim())
  .sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
  });

console.log(input.join("\n"));
