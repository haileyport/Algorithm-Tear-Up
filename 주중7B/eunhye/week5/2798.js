//블랙잭

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n");

const info = input[0].split(" ");
const cards = input[1].split(" ").map(Number);

//카드 수 info[0], 블랙잭넘버 info[1]
//각각의 카드 cards

let ans = 0;

//카드 3장을 뽑는거

for (i = 0; i < cards.length - 2; i++) {
  for (j = i + 1; j < cards.length - 1; j++) {
    for (k = i + 2; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum >= ans && sum <= info[1]) {
        ans = sum;
      }
    }
  }
}
console.log(ans);
