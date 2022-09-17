const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const myCard = input[1].split(" "); // 상근이가 가지고 있는 숫자 카드
const card = input[3].split(" "); // 숫자 카드

let mapCard = new Map();
for (const el of myCard) {
  if (mapCard.has(el)) mapCard.set(el, mapCard.get(el) + 1);
  else mapCard.set(el, 1);
}

let result = [];
for (const el of card) {
  if (mapCard.has(el)) result.push(mapCard.get(el));
  else result.push(0);
}

console.log(result.join(" "));
