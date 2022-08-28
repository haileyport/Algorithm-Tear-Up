// 숫자 카드
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const setCard = new Set(input[1].split(" ")); // 숫자 카드
const myCard = input[3].split(" "); // 상근이가 가지고 있는 숫자 카드

let result = [];
for (const el of myCard) {
  setCard.has(el) ? result.push(1) : result.push(0);
}

console.log(result.join(" "));
